import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchById, fetchDeleteById, fetchEmp } from '../utils/Api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { providerContext } from '../utils/CreateContext';
import Loading from './Loading';

const EmpTable = () => {
    const[loading,setLoading]=useContext(providerContext)
    const [rerender, setRerender] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const Employee = useSelector((state) => state.val.data);
    const status = useSelector((state) => state.val.status);
    const error = useSelector((state) => state.val.error);
  
    useEffect(() => {
       dispatch(fetchEmp())
    }, [dispatch,rerender]);

    const handleEdit = (id) => {
        dispatch(fetchById(id));
        navigate("/edit");
    }
    const handleDelete = (id) => {
      dispatch(fetchDeleteById(id)).then(() => {
          setRerender(prevState => !prevState); // Toggle rerender state
      });
  }
    if (status === "loading") {
      setLoading(!loading);
      return <div><Loading /></div>;
    }
  
    if (status === "failure") {
      return <div>Error:{error}</div>;
    }

    if (!Array.isArray(Employee)) {
      return <div>No employees found</div>;
  }
    return (
        <div>
            <h1 className="text-center">Employees Table</h1>
            <div class="table-responsive">
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Date of Joining</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Employee.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>
                      <p class="fw-normal mb-1">{item.name}</p>
                      </td>
                      <td>
                        <p class="fw-normal mb-1">{item.position}</p>
                      </td>
                      <td>
                      <p class="fw-normal mb-1">{item.joining}</p>
                      </td>
                      <td>
                        <div className="d-flex me-3">
                          <button
                            type="button"
                            class="btn btn-primary rounded-4 btn-sm"
                            onClick={() => {
                              handleEdit(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger rounded-4 btn-sm mx-2"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default EmpTable;
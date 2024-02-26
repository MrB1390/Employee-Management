import React, { useEffect } from "react";
import "./list.css";
import { useSelector,useDispatch } from "react-redux";
import { fetchEmp } from "../utils/Api";

const List = () => {
  const dispatch = useDispatch();

  const EmployeeData = useSelector((state) => state.val.data);
  const status = useSelector((state) => state.val.status);
  const error = useSelector((state) => state.val.error);

  useEffect(() => {
     dispatch(fetchEmp())
  }, [dispatch]);
  if (status === "loading") {
    return <div>loading....</div>;
  }

  if (status === "failure") {
    return <div>Error:{error}</div>;
  }

  return (
    <div>
      <h1 className="text-center">Employees List</h1>
      <div className="container mt-4 p-2">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {EmployeeData.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div class="col">
                    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded card-val">
                        <div className="rounded mx-auto d-block">
                          <img src={item.image} class="card-img" alt={item.name} />
                        </div>
                      <div class="card-body">
                        <h5 class="card-title text-center">Employee Id: {item.id}</h5>
                        <p class="card-text text-start">
                          <h5>Employee Name: {item.name}</h5>
                          <h5>Position: {item.position}</h5>
                          <p>Date of Joining : {item.joining}</p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;

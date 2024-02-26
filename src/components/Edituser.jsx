import React, { useEffect } from "react";
import "./add.css";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { useFormik } from "formik";
import { fetchUpdateById } from "../utils/Api";
import { useNavigate } from "react-router-dom";
const Edituser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const EmployeeDatabyId = useSelector((state) => state.val.data);
    const status = useSelector((state) => state.val.status);
    const error = useSelector((state) => state.val.error);

    useEffect(()=>{
        formik.setValues(EmployeeDatabyId);
    },[EmployeeDatabyId])
 
    if (status === "failure") {
     return <div>Error:{error}</div>;
   } 
 
 
     const validationSchema = Yup.object().shape({
     name: Yup.string().required("Employee name Required"),
     position: Yup.string().required("Employee position Required"),
     image: Yup.mixed().required("Employee Image Required"),
     joining:Yup.string().required("Employee date Required")
     })
 
     const formik = useFormik({
         initialValues:{
             name: "",
             position:"",
             image:"",
             joining:""
         },
         validationSchema:validationSchema,
         onSubmit:(values) => {
             dispatch(fetchUpdateById(values.id,values))
             navigate("/")
         }
     })
     const handleImageChange = (event) => {
        formik.setFieldValue("image", event.currentTarget.files[0]);
      };
    return (
        <div>
            <h1 className="text-center">Edit Employee</h1>
            <div className="d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label for="id" class="form-label">
              ID
            </label>
            <input
              type="text"
              class="form-control"
              id="id"
              placeholder="Enter your ID"
              value={formik.values.id}
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
             <br />
            <div className="text-danger">{formik.errors.name}</div>
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">
              Date of Joining
            </label>
            <input
              type="date"
              class="form-control"
              name="joining"
              placeholder="Enter your Joining Date"
              value={formik.values.joining}
              onChange={formik.handleChange}
            />
             <br />
            <div className="text-danger">{formik.errors.joining}</div>
          </div>
          <div class="mb-3">
            <label for="position" class="form-label">
              Position
            </label>
            <input
              type="text"
              class="form-control"
              name="position"
              placeholder="Enter your Position"
              value={formik.values.position}
              onChange={formik.handleChange}
            />
             <br />
            <div className="text-danger">{formik.errors.position}</div>
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">
              Choose Image
            </label>
            <input type="file" class="form-control" id="avatar" onChange={handleImageChange} />
            <br />
            <div className="text-danger">{formik.errors.image}</div>
          </div>
        
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
        </div>
    );
};

export default Edituser;
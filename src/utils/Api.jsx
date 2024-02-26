import axios from "axios";
import { empDataAddFailure, empDataAddSuccess, empDataFetch, empDataFetchFailure, empDataFetchSuccess, empEditSuccess, empFetchIdFailure, empFetchIdSuccess,empEditFailure,empDeleteFailure,empDeleteSuccess } from "./EmpSlice"


// function returns another call back function

export const fetchEmp=()=>async(dispatch)=>{
     dispatch(empDataFetch());

     try {
        const res = await axios.get("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Employees")
        dispatch(empDataFetchSuccess(res.data))
     } catch (error) {
        dispatch(empDataFetchFailure(error.message))
     }
}

export const fetchAdd = (data) => async(dispatch)=>{
    try {
        const res = await axios.post("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Employees", data)
        dispatch(empDataAddSuccess(data))
    } catch (error) {
        dispatch(empDataAddFailure(error.message))
    }
}

export const fetchById = (id) => async(dispatch) => {
    try {
        const res = await axios.get(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Employees/${id}`)
        dispatch(empFetchIdSuccess(res.data))
    } catch (error) {
        dispatch(empFetchIdFailure(error.message))
    }
}

export const fetchUpdateById = (id,data) => async(dispatch) => {
    try {
        const res = await axios.put(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Employees/${id}`,data)
        dispatch(empEditSuccess(data))
        
    } catch (error) {
        dispatch(empEditFailure(error.message))
    }
}
export const fetchDeleteById = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Employees/${id}`)
        dispatch(empDeleteSuccess(res.data))
    } catch (error) {
        dispatch(empDeleteFailure(error.message))
    }
}
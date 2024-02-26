import { configureStore } from "@reduxjs/toolkit";
import EmpReducer from "./EmpSlice";

export const empStore = configureStore({
    reducer:{
        val:EmpReducer
    }
})
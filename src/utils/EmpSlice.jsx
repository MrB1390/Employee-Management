import { createSlice } from "@reduxjs/toolkit";

export const EmpSlice = createSlice({
  name: "Employee",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    empDataFetch: (state) => {
      state.status = "loading";
    },
    empDataFetchSuccess: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    empDataFetchFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
    empDataAddSuccess: (state, action) => {
      state.status = "success";
      state.data.push(action.payload); // push the new value to the state
    },
    empDataAddFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
    empFetchId: (state) => {
      state.status = "loading";
    },
    empFetchIdSuccess: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    empFetchIdFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
    empEditSuccess: (state, action) => {
        state.status = "success";
        const updatedEmployee = action.payload; // Assuming the payload contains the updated employee object
        const index = state.data.findIndex(employee => employee.id === updatedEmployee.id);
        if (index !== -1) {
            state.data[index] = updatedEmployee;
        }
    },
    empEditFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
    empDeleteSuccess: (state, action) => {
      state.status = "success";
      // state.data=action.payload
    },
    empDeleteFailure: (state, action) => {
      state.status = "failure";
      state.error = action.payload;
    },
  },
});

export const {
  empDataFetch,
  empDataFetchSuccess,
  empDataFetchFailure,
  empDataAddSuccess,
  empDataAddFailure,
  empFetchId,
  empFetchIdFailure,
  empFetchIdSuccess,
  empEditFailure,
  empEditSuccess,
  empDeleteFailure,
  empDeleteSuccess,
} = EmpSlice.actions;
export default EmpSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { EmployeesSlice } from "./employees/employeesSlice";


export const store = configureStore({
    reducer: {
        employees: EmployeesSlice.reducer
    }
})
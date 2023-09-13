import { configureStore } from "@reduxjs/toolkit";
import { EmployeesSlice } from "./employees/employeesSlice";


export const store = configureStore({
    reducer: {
        employees: EmployeesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
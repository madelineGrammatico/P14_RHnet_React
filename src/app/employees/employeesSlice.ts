import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"

export type Employee = {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    startDate: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    department: string,
    id?: string
}
export type Employees = {
    employees: Employee[]
}

const initialState: Employees = {
    employees: []
}

export const EmployeesSlice = createSlice({
    name: "Employees",
    initialState,
    reducers: {
        addEmployee: (state: Draft<Employees>, action: PayloadAction<Employee>) => {
            state.employees.push({
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zipCode: action.payload.zipCode,
                department: action.payload.department,
                id: `${action.payload.lastName}_${new Date().toDateString()}`
            })
        }
    }
})
export default EmployeesSlice.reducer
export const { addEmployee } = EmployeesSlice.actions
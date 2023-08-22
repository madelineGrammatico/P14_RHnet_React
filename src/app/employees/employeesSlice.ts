import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"

export type Employee = {
    firstName: string,
    lastName: string,
    dateOfBirth: any,
    startDate: any,
    street: string,
    city: string,
    state: string,
    zipCode: number,
    department: string,
    id?: string
}
export type Employees = {
    employees: Employee[]
}

const initialState: Employees = {
    employees: [
        
        {
            firstName: "prenom",
            lastName: "nom",
            dateOfBirth: new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "rue",
            city: "ville",
            state: "pays",
            zipCode: 2,
            department: "departement",
            id: "0"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "1"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "2"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "3"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "4"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "5"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "6"
        },
        {
            firstName: "string",
            lastName: "string",
            dateOfBirth:  new Date().toLocaleDateString(),
            startDate:  new Date().toLocaleDateString(),
            street: "string",
            city: "string",
            state: "string",
            zipCode: 1,
            department: "string",
            id: "7"
        }
    ]
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
import { useForm, Controller } from "react-hook-form"
import { states } from "../../data/state";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { Typography, Link } from "@mui/material";

import styles from "./Home.module.css"
import { Employee, addEmployee } from "../../app/employees/employeesSlice";
import { useAppDispatch} from "../../app/hooks/hooks"
import { useState } from "react";

import { Link as RouterLink } from 'react-router-dom'

import { Modal }  from "mg-p14-modal";

interface EmployeeFormData {
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    startDate: Date,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    department: string
}
export function Home() {
    const { 
        handleSubmit, 
        register, 
        control, 
        reset, 
        formState : {errors} 
    } = useForm<EmployeeFormData>()
    const dispatch = useAppDispatch()
    const [ showModal, setShowModal ] = useState(false)

    const onSubmit = (data: EmployeeFormData) => {
        const dataFormated: Employee = {
            ...data,
            dateOfBirth: data.dateOfBirth.toLocaleDateString(),
            startDate: data.dateOfBirth.toLocaleDateString(),
        }

        dispatch(addEmployee(dataFormated))
        setShowModal(true)
        reset()
    }
      
    return(
        <main className={ styles["main"] }>
            <header className={styles.header}>
                <Typography variant="h1" gutterBottom >RHnet</Typography>
                
                <Typography variant="h2" gutterBottom>Create Employee</Typography>
            </header>

           
            <form onSubmit={ handleSubmit(onSubmit) } className={styles.form }>
                <div className={styles["container--employee"]}>
                <TextField 
                    label="First name" 
                    fullWidth
                    { ...register("firstName", {required: true})
                }/>
                {errors.firstName && 
                    <Typography variant="subtitle2" gutterBottom>First name is required</Typography>}

                <TextField
                    label="Last name" 
                    fullWidth
                    { ...register("lastName", {required: true})}
                />
                {errors.lastName &&  
                    <Typography variant="subtitle2" gutterBottom>Last name is required</Typography>}

                <Controller
                    control={control}
                    name='dateOfBirth'
                    rules={ { required: true } }
                    defaultValue={new Date()}
                    render={({ field }) => (
                        <DatePicker
                            label="Date of birth"
                            value={field.value}
                            onChange={ field.onChange}
                        />
                    )}
                />
                {errors.dateOfBirth &&  
                    <Typography variant="subtitle2" gutterBottom>Select a date</Typography>}

                <Controller
                    control={control}
                    name='startDate'
                    rules={ { required: true } }
                    defaultValue={new Date()}
                    render={({ field }) => (
                        <DatePicker 
                            label="Start date"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                {errors.startDate &&  
                    <Typography variant="subtitle2" gutterBottom>Select a date</Typography>}

                </div>
                
                <div className={styles["container--adress"] }>
                    <TextField 
                        label="Street" 
                        { ...register("street", {required: true})}/>
                    {errors.street && 
                        <Typography variant="subtitle2" gutterBottom>Street is required</Typography>}

                    <TextField
                        label="City"
                        { ...register("city", {required: true})}/>
                    {errors.city &&  
                        <Typography variant="subtitle2" gutterBottom>City is required</Typography>}

                    <FormControl fullWidth>
                        <InputLabel id="stateLabel">State</InputLabel>
                        <Controller 
                            control={control}
                            name='state'
                            rules={ { required: true } }
                            render={({ field }) => (
                                <Select
                                    label="state"
                                    labelId="stateLabel"
                                    value={field.value || "-1"}
                                    { ...register("state", {required: true, min: 3 })}
                                >
                                    <MenuItem disabled value="-1">select an option</MenuItem>
                                    {states.map((state)=> {
                                                return <MenuItem key={state.abbreviation} value={state.name}>{ state.name }</MenuItem>
                                            })}
                                </Select>)}
                        />
                    </FormControl>
                    {errors.state &&  
                        <Typography variant="subtitle2" gutterBottom>Select a State</Typography>}

                    <TextField
                        label="Zip code"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        { ...register("zipCode", {required: true})}/>
                    {errors.zipCode &&  
                        <Typography variant="subtitle2" gutterBottom>Zip code is required and must be a number</Typography>}
                </div>

                <FormControl fullWidth>
                        <InputLabel id="departmentLabel">Department</InputLabel>
                        <Controller 
                            control={control}
                            name='department'
                            rules={ { required: true } }
                            render={({ field }) => (
                                <Select
                                    id="Department"
                                    label="Department"
                                    labelId="departmentLabel"
                                    defaultValue=""
                                    value={field.value || "-1"}
                                    { ...register("department", {required: true, min: 3})}
                                >   
                                    <MenuItem disabled value="-1">select an option</MenuItem>
                                    <MenuItem value="Sales">Sales</MenuItem>
                                    <MenuItem value="Marketing">Marketing</MenuItem>
                                    <MenuItem value="Engineering">Engineering</MenuItem>
                                    <MenuItem value="Human Resources">Human Resources</MenuItem>
                                    <MenuItem value="Legal">Legal</MenuItem>
                                </Select>)}
                        />
                    </FormControl>
                    {errors.department &&  
                        <Typography variant="subtitle2" gutterBottom>Select a State</Typography>}

                <Button type="submit" variant="contained" className={styles.button}>Save</Button>
            </form>

            <Link 
                to="/CurrentEmployees" 
                underline="none" 
                component={RouterLink}
                className={styles.link}
            >View Current Employees</Link>

            { showModal && 
                <Modal onClose={() => setShowModal(false)} isOpen={true}>
                    <h2>New Employee created !!</h2>
                    
                </Modal>
            }
        </main>
    )
}
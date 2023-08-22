import { useForm, Controller } from "react-hook-form"
import { Link } from "react-router-dom"

import { states } from "../../data/state";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import  styles  from "./Home.module.css"
// import {SelectUi} from "../../components/SelectUi/SelectUi";
import { Employee, addEmployee } from "../../app/employees/employeesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export function Home() {
    const {handleSubmit, register,control, formState : {errors} } = useForm()
    const dispatch = useDispatch()
    const [showModal, setshowmodal] = useState(true)

    function onSubmit(data: Employee) {
        console.log(data)
        const dataFormated = data
        dataFormated.dateOfBirth = dataFormated.dateOfBirth.toLocaleDateString()
        dataFormated.startDate = dataFormated.startDate.toLocaleDateString()
        console.log(dataFormated)
        dispatch(addEmployee(dataFormated))
        setshowmodal(true)
    }
    return(
        <main className={ styles["main"] }>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/CurrentEmployees">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["container"] }>
                    
                    <TextField 
                        label="First name" 
                        fullWidth
                        { ...register("firstName", {required: true})
                    }/>
                    {errors.firstName && <p>First name is required</p>}

                    <TextField
                        label="Last name" 
                        fullWidth
                        { ...register("lastName", {required: true})}
                    />
                    {errors.lastName && <p>Last name is required</p>}

                    <Controller
                        control={control}
                        name='dateOfBirth'
                        rules={ { required: true } }
                        render={({ field }) => (
                            <DatePicker
                                label="Date of birth"
                                value={field.value}
                                onChange={(newDate) => field.onChange(newDate)}
                            />
                        )}
                    />
                    {errors.dateOfBirth && <p>Select a date</p>}

                    <Controller
                        control={control}
                        name='startDate'
                        rules={ { required: true } }
                        render={({ field }) => (
                            <DatePicker 
                                label="Start date"
                                value={field.value}
                                onChange={(newDate) => field.onChange(newDate)}
                            />
                        )}
                    />
                    {errors.startDate && <p>Select a date</p>}

                    <div className={styles["container--adress"] }>
                        <legend>Address</legend>

                        <TextField 
                            label="Street" 
                            { ...register("street", {required: true})}/>
                        {errors.street && <p>Street is required</p>}

                        <TextField
                            label="City"
                            { ...register("city", {required: true})}/>
                        {errors.city && <p>City is required</p>}

                        <FormControl fullWidth>
                            <InputLabel id="stateLabel">State</InputLabel>
                            <Controller 
                                control={control}
                                name='state'
                                rules={ { required: true } }
                                render={({ field }) => (
                                    <Select
                                        id="selectTest2"
                                        label="state"
                                        labelId="stateLabel"
                                        value={field.value}
                                        { ...register("state", {required: true})}
                                        >
                                        {states.map((state)=> {
                                                    return <MenuItem key={state.abbreviation} value={state.name}>{ state.name }</MenuItem>
                                                })}
                                    </Select>)}
                            />
                        </FormControl>
                        {errors.state && <p>Select a State</p>}

                        <TextField
                            label="Zip code"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            { ...register("zipCode", {required: true})}/>
                        {errors.zipCode && <p>Zip code is required and must be a number</p>}
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
                                        value={field.value}
                                        { ...register("department", {required: true})}
                                    >
                                        <MenuItem value="Sales">Sales</MenuItem>
                                        <MenuItem value="Marketing">Marketing</MenuItem>
                                        <MenuItem value="Engineering">Engineering</MenuItem>
                                        <MenuItem value="Human Resources">Human Resources</MenuItem>
                                        <MenuItem value="Legal">Legal</MenuItem>
                                    </Select>)}
                            />
                        </FormControl>
                        {errors.department && <p>Select a State</p>}

                    <Button type="submit" variant="contained">Save</Button>
                </form>
            </div>

            {showModal && 
                <Modal setShowModal={setshowmodal}>
                    <h2>New Employee created !!</h2>
                    
                </Modal>
            }
        </main>
        
    )
}
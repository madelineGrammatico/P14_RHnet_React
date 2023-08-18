import { useForm, Controller } from "react-hook-form"
import { Link } from "react-router-dom"

import { states } from "../../data/state";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export function CurrentEmployees() {
    const {handleSubmit, register, control, formState : {errors} } = useForm()
    function onSubmit(data) {
        console.log(data)
    }
    return(
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/Home">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" { ...register("firstName", { required : true })}/>
                    {errors.firstName && <p>First name is required</p>}

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" { ...register("lastName", { required : true })}/>
                    {errors.lastName && <p>Last name is required</p>}

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <Controller
                        control={control}
                        name='dateOfBirth'
                        render={({ field }) => (
                            <DatePicker
                                id="date-of-birth"
                                placeholderText='Select date'
                                onChange={(date: Date) => field.onChange(date)}
                                selected={field.value}
                            />
                        )}
                    />
                    {errors.dateOfBirth && <p>Select a date</p>}

                    <label htmlFor="start-date">Start Date</label>
                    <Controller
                        control={control}
                        name='startDate'
                        render={({ field }) => (
                            <DatePicker
                                id="start-date"
                                placeholderText='Select date'
                                onChange={(date: Date) => field.onChange(date)}
                                selected={field.value}
                            />
                        )}
                    />
                    {errors.startDate && <p>Select a date</p>}

                    <div className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" { ...register("street", { required : true })}/>
                        {errors.street && <p>Street is required</p>}

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" { ...register("city", { required : true })}/>
                        {errors.city && <p>City is required</p>}

                        <label htmlFor="state">State</label>
                        <select id="state" { ...register("state", { required : true })}>
                            {states.map((state)=> {
                                return <option key={state.abbreviation}>{ state.name }</option>
                            })}
                        </select>
                        {errors.state && <p>Select a State</p>}

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" { ...register("zipCode", { required : true })}/>
                        {errors.zipCode && <p>Zip code is required</p>}
                    </div>

                    <label htmlFor="department">Department</label>
                    <select id="department" { ...register("department", { required : true })}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                    {errors.department && <p>Select a department</p>}

                    <button type="submit">Save</button>
                </form>

                
            </div>
        </main>
        
    )
}
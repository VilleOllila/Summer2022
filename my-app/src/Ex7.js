import React from 'react'
import { useState } from 'react'

const Ex7 = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        alert("Hello " + firstName + " " + lastName)
    }

    return (
        <div>
            <form>
                <label>
                    First Name:
                </label> <br />
                    <input 
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}>
                    </input><br />
                <label>
                    Last Name:
                </label> <br />

                    <input 
                    type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}>
                    </input><br /><br />   

                    <input 
                    type="submit" 
                    value="GREET ME"
                    onClick={submitForm}></input>
            </form>
        </div>
    )
}
export default Ex7
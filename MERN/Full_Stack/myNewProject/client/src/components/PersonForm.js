import React, { useState } from 'react'

import axios from 'axios'

const PersonForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res => console.log('Response: ', res))
        .catch(err => console.log('Error:', err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="fName">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)}/>
            </div>
            <br/>
            <div className="lName">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={e => setLastName(e.target.value)}/>
            </div>
            <br/>
            <button>Submit</button>
        </form>
    )
}


export default PersonForm
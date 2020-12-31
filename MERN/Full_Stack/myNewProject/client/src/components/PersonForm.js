import React, { useState } from 'react'

const PersonForm = props => {
    const {initialFirstName, initialLastName, onSubmitProp}  = props
    const [firstName, setFirstName] = useState(initialFirstName)
    const [lastName, setLastName] = useState(initialLastName)

    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({firstName, lastName})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="fName">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName" onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    />
            </div>
            <br/>
            <div className="lName">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    />
            </div>
            <br/>
            <input type="submit" />
        </form>
    )
}


export default PersonForm
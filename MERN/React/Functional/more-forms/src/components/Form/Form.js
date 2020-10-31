import React, { useState } from 'react'

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const [fNameError, setfNameError] = useState("")
    const [lNameError, setlNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmError, setConfirmError] = useState("")

    const handleFirst = evt => {
        setFirstName(evt.target.value)
        evt.target.value.length < 2 ? setfNameError("First name must be at least 2 characters") : setfNameError("")
    }

    const handleLast = evt => {
        setLastName(evt.target.value)
        evt.target.value.length < 2 ? setlNameError("Last name must be at least 2 characters") : setlNameError("")
    }

    const handleEmail = evt => {
        setEmail(evt.target.value)
        evt.target.value.length < 5 ? setEmailError("Email must be at least 5 characters") : setEmailError("")
    }

    const handlePassword = evt => {
        setPassword(evt.target.value)
        evt.target.value.length < 8 ? setPasswordError("Password must be at least 8 characters") : setPasswordError("")
    }

    const handleReConfirm = evt => {
        setConfirm(evt.target.value)
        evt.target.value !== password ? setConfirmError("Passwords must match") : setConfirmError("")
    }

    return(
        <>
            <form>
            <div className="forms names">
                <div className="first">
                    <label htmlFor="firstName">First Name</label> 
                    <input onChange={ handleFirst } type="text"/>
                    {fNameError ? <p style={{color:'red'}}>{fNameError}</p> : ""}
                </div>
                <div className="last">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={ handleLast } type="text"/>
                    {lNameError ? <p style={{color: 'red'}}>{lNameError}</p>: ""}
                </div>

            </div>
            <div className="forms email">
                <label htmlFor="email">Email</label>
                <input onChange={ handleEmail } type="text"/>
                { handleEmail ? <p style={{color:'red'}}>{emailError}</p> : ""}
            </div>
            <div className="forms passwords">
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input onChange={ handlePassword } type="password"/>
                    { handlePassword ? <p style={{color:'red'}}>{passwordError}</p> : ""}
                </div>
                <div className="confirm-password">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input onChange={ handleReConfirm } type="password"/>
                    { handleReConfirm ? <p style={{color:'red'}}>{confirmError}</p> : ""}
                </div>
            </div>
            </form>
            <div className="result">
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{email}</h3>
                <h3>{password}</h3>
                <h3>{confirm}</h3>
            </div>
        </>
    )
}

export default Form
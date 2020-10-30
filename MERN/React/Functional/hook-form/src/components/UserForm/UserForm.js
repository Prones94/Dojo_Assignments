import React from 'react'
import './UserForm.css'

const UserForm = props => {
    const {input, setInput} = props;

    const onChange = evt => {
       setInput({
           ...input,
           [evt.target.name]: evt.target.value
       });
    };

    return (
        <form>
            <div className="form names">
                <div className="firstName">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={onChange}/>
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange}/>
                </div>
            </div>
            <div className="form email">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={onChange}/>
            </div>
            <div className="form passwords">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={onChange}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChange}/>
            </div>
        </form>
    );
}
export default UserForm
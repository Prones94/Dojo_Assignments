import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import Form from '../../components/Form/Form';

const New = props => {
    const [formData, setFormData] = useState({
        name:""
    })
    const [errors, setErrors] = useState(null)

    const handleSubmit = () => {
        axios
            .post(`http://localhost:8000/api/authors/create`, formData)
            .then(res => navigate("/"))
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div className="form">
            <Form
                formData={formData}
                setFormData={setFormData}
                errors={errors}
            />
            <button
                onClick={e => navigate("/")}
            >Cancel</button>
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default New
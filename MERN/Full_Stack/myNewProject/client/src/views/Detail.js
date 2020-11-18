import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Detail = props => {
    const [person, setPerson] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+ props.id)
        .then(res => setPerson(res.data))
        .catch(err => console.log(err))
    }, [props.id])

    return (
        <div>
            <p>First name: {person.firstName}</p>
            <p>LastName: {person.lastName}</p>
        </div>
    )
}

export default Detail


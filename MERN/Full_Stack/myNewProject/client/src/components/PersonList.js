import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton';

const PersonList = props => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setPeople(res.data))
    }, [])
    const removeFromDom = personID => {
        setPeople(people.filter(person => person._id !== personID))
    }
    return (
        <div>
            {people.map((person, i) => {
                return(
                    <p key={i}>
                        <Link to={"/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/" + person._id+"/edit"}>
                            Edit
                        </Link>
                        |
                        <DeleteButton
                            personID={person._id}
                            successCallback={() => removeFromDom(person._id)} />
                    </p>
                )
            })}
        </div>
    )
}


export default PersonList
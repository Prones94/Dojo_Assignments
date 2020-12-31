import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'


export default function Main(){
    const [people, setPeople] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                setPeople(res.data)
                setLoaded(true)
            })
    }, [])
    const removeFromDom = personID => {
        setPeople(people.filter(person => person._id !== personID))
    }
    const createPerson = person => {
        axios
            .post('http://localhost:8000/api/person', person)
            .then(res => {
                setPeople([...people, res.data])
            })
    }
    return (
        <div>
            <PersonForm  onSubmitProp= {createPerson} initialFirstName="" initialLastName=""/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
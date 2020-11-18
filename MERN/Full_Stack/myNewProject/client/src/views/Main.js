import React, { useState, useEffect } from 'react'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'
import axios from 'axios'


export default function Main(){
    const [people, setPeople] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                setPeople(res.data)
                setLoaded(true)
            })
    }, [])
    return (
        <div>
            <PersonForm />
            {loaded && <PersonList people={people}/>}
        </div>
    )
}
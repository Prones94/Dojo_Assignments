import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import AllAuthors from '../../components/AllAuthors/AllAuthors'

const HomePage = () => {
    const [authors, setAuthors ] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <div className="homepage">
            <Link to="/new">Add Author</Link>
            <AllAuthors authors={authors} setAuthors={setAuthors} />
        </div>
    )
}

export default HomePage
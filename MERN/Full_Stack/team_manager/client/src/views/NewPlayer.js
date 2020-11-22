import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const NewPlayer = props => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [errors, setErrors] = useState("")

    const handleName = e => {
        setName(e.target.value)

        if (e.target.value.length < 2 && e.target.value.lenght !== 0){
            setErrors({
                name: {
                    message: "The name must be at least 2 characters"
                }
            })
        } else {
            setErrors({})
        }
    }

    const handlePosition = e => {
        setPosition(e.target.value)
    }

    const handleSubmit  = e => {
        e.preventDefault();

        const formData = {
            name,
            position
        }

        axios.post(`http://localhost:8000/api/players.create`, formData)
            .then(res => navigate("/players/list"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className="newplayer">
            <Link to="/players/list">List</Link>
            <Link to="/players/addplayers">Add Players</Link>
            <form onSubmit={handleSubmit} className="newplayer__form">
                <h2>Add Player</h2>
                <div className="newplayer__name">
                    <label htmlFor="name">Player Name:</label>
                    <input
                        type="text"
                        onChange={handleName}
                    />
                </div>
                {errors?.name && (
                    <p>{errors.name?.message}</p>
                )}
                <div className="newplayer__position">
                    <label htmlFor="position">Player Position:</label>
                    <input
                        type="text"
                        onChange={handlePosition}
                    />
                </div>
                <button type="submit">Add Player</button>
            </form>
        </div>
    )
}

export default NewPlayer
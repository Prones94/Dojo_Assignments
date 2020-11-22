import React, { useState, useEffect } from 'react'
import { Link, navigate} from '@reach/router'
import axios from 'axios'

const PlayerList = props => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/players`)
            .then(res => setPlayers(res.data))
            .catch(err => console.error(err))
    }, [])

    const handleDelete = (playerID, playerName) => {
        if (window.confirm(`Are you sure you want to remove ${playerName}?`)){
            axios
                .delete(`http://localhost:8000/api/players/${playerID}`)
                .then(res => {
                    const filteredPlayers = players.filter(player => {
                        return player._id !== playerID
                    })
                    setPlayers(filteredPlayers)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className="playerlist">
            <Link to="/players/list">List</Link>
            <Link to="/players/addplayer">Add New Player</Link>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => {
                        return (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                    <button
                                        onClick={e => handleDelete(player._id, player.name)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList
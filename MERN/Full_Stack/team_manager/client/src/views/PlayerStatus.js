import React, { useState, useEffect } from 'react'
import { Link, navigate} from '@reach/router'
import axios from 'axios'

const PlayerStatus = props => {
    const [players, setPlayers] = useState([])

    useEffect = (() => {
        axios
            .get(`http://localhost:8000/api/players`)
            .then(res => setPlayers(res.data))
            .catch(err => console.error(err))
    },[])

    const handleClick = (playerIdx, playerID, status) => {
        const prevPlayers = [...players]
        prevPlayers[playerIdx][`games${props.gameID}`] = status
        axios
            .put(`http://localhost:8000/api/players/${playerID}`, prevPlayers)
            .then(res => setPlayers(prevPlayers))
            .catch(err => console.error(err))
    }

    return (
        <div className="status">
            <h1>Player Status - Game {props.gameID}</h1>
            <br/>
            <div className="status__games">
                <Link to="/status/game/1">Game 1</Link>{" "}
                <Link to="/status/game/2">Game 2</Link>{" "}
                <Link to="/status/game/3">Game 3</Link>
            </div>
            <table className="status__table">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => {
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>
                                <button
                                    onClick={e => handleClick(i, player._id, 'Playing')}>
                                Playing</button>
                                <button
                                    onClick = {e => handleClick(i , player._id, 'Not Playing')}
                                >Not Playing</button>
                                <button
                                    onClick = {e => handleClick(i, player._id, 'Undecided')}
                                >Undecided</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default PlayerStatus
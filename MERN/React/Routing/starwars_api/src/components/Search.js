import React, { useState } from 'react'
import axios from 'axios'

import { navigate } from '@reach/router'

const Search = props => {
    const {setName, setDisplay, setHomeWorld} = props
    const [searchInput, setSearchInput] = useState("people")
    const [searchIndex, setSearchIndex] = useState()

    const options = [
        "people",
        "planets",
        "films"
    ]

    const StaWarsAPI = e => {
        e.preventDefault();
        return (
            axios.get(`https://swapi.dev/api/${searchInput}/${searchIndex}`)
            .then(response => {
                if(searchInput === "people"){
                    setName(response.data.name)
                    const newResponse = {
                        Height: response.data.height,
                        Gender: response.data.gender,
                        Mass: response.data.mass,
                        "Hair Color": response.data.hair_color,
                    };
                    axios.get(response.data.homeworld)
                    .then(prevResponse => {
                        setHomeWorld(prevResponse.data);
                    })
                    .catch(err => {
                        console.log(`Error: ${err}`);
                        navigate("/not_found")
                    })
                    setDisplay(newResponse)
                } else if(searchInput === "planets"){
                    setName(response.data.name)
                    setDisplay({
                        "Rotation Period": response.data.rotation_period,
                        "Orbital Period": response.data.orbital_period,
                        Gravity: response.ddata.gravity,
                        Terrain: response.data.terrain,
                    })
                } else if (searchInput === "films"){
                    setName(response.data.name)
                    setDisplay({
                        "Episode ID": response.data.episode_id,
                        Director: response.data.director,
                        Producer: response.data.producer,
                        "Release Date": response.data.release_date,
                    })
                }
                navigate(`/${searchInput}/${searchIndex}`)
            }).catch(err => {
                console.log(`Error: ${err}`);
                navigate("/not_found")
            })
        )
    }
    return (
        <div>
            <form>
                <select onChange={e=> setSearchInput(e.target.value)}>
                    {options.map((option, i) =>{
                        return(<option key={i} value={option}>{option}</option>)
                    })}
                </select>
                <input type="number" step="1" onChange={e => setSearchIndex(e.target.value)}/>
                <button onClick={e => StaWarsAPI(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search
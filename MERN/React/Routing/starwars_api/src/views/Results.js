import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'

const Results = props => {
    const { category, name, id, display, homeworld } = props

    return (
        <div>
            <h3>{name}</h3>
            <br/>
            <div>
                {Object.entries(display).map(([key,val]) => {
                    return (
                        <p key={key}>{key} : {val}</p>)
                 })}
            </div>
            {(category==="people" && homeworld !== null) && <p>HomeWorld: {homeworld.name}</p>}
        </div>
    )
}
export default Results
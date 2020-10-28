import React from 'react'
import './PersonCard.css'

export default class PersonCard extends React.Component {
    render(){
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div className="person-card">
                <h1>{lastName}, {firstName}</h1>
                <br/>
                <p>Age: {age}</p>
                <br/>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}
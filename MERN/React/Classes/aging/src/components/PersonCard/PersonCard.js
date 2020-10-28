import React, { Component } from 'react'
import './PersonCard.css'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    handleClick = () => {
        this.setState({
            age : this.state.age + 1
        })
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return (
            <div className="personcard-container">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.handleClick}>Add one year for {firstName} {lastName}</button>
            </div>
        )
    }
}
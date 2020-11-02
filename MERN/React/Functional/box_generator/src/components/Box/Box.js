import React from 'react'
import './Box.css'

const Box = props => {
    const styles = {
        backgroundColor : props.inputs.color,
        width: parseInt(props.inputs.length),
        height: parseInt(props.inputs.length)
    }
    
    return (
        <div className="boxes" style={styles}></div>
    )
}

export default Box
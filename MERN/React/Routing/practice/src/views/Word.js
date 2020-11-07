import React from 'react'

const Word = (props) => {
    const {word, color, background} = props
    const inlineStyles = {
        color : color,
        backgroundColor : background
    }
    return (
        <div>
            {isNaN(word) ?
                <h1 style={inlineStyles}>The word is {word}</h1> :
                <h1 style={inlineStyles}>The number is {word}</h1>
            }
        </div>
    )
}

export default Word

import React, { useState } from 'react'

const Form = props => {
    const { inputs, setInputs} = props;
    const [color, setColor] = useState("")
    const [length, setLength] = useState(0)


    const createBox = e => {
        e.preventDefault()
        const newBox = {
            color : color,
            length :  length,
        }
        setInputs([...inputs, newBox])

        setColor("")
        setLength(0)
    }


    return (
        <div className="formContainer">
            <form  onSubmit={createBox}>
                <div className="createColor">
                    <label htmlFor="color">Color:</label>
                    <input type="text" value={color} onChange={newColor => setColor(newColor.target.value)}/>
                </div>
                <div className="createSize">
                    <label htmlFor="length">Size</label>
                    <input type="number" step="1" value={length} onChange={newSize => setLength(newSize.target.value)}/>
                </div>
                <input type="submit" value="Create Box"/>
            </form>
        </div>
    )
    }

export default Form
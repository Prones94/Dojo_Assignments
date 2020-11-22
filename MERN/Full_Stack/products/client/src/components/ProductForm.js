import React, { useState, useEffect } from 'react'

const ProductForm = (props) => {
    const {initialtTitle, initialPrice, initialDescription, onSubmitProps} = props
    const [title, setTitle] = useState(initialtTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const submitHandler = e => {
        e.preventDefault()
        onSubmitProps({title, price, description})
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="form__title">
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={e => {setTitle(e.target.value)}}
                    />
            </div>
            <div className="form__price">
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={e => {setPrice(e.target.value)}}
                    />
            </div>
            <div className="form__description">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    value="description"
                    onChange={e => {setDescription(e.target.value)}}
                    />
            </div>
            <button type="submit">Submit Product</button>
        </form>
    )
}

export default ProductForm
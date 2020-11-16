import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const NewProduct = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(null)

    const handleSubmit = e => {
        console.log("Submiting new product!");
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }

        axios
            .post("http://localhost:8000/api/posts", newProduct)
            .then(res => {
                navigate("/posts")
            })
            .catch(err => {
                console.log(err.response);
                setErrors(err.response.data?.errors)
            })
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="title">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
                    {errors?.title && (
                        <span>{errors.title?.message}</span>
                    )}
                </div>
                <br/>
                <div className="price">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={e => setPrice(e.target.value)}/>
                    {errors?.price && (
                        <span>{errors.price?.message}</span>
                    )}
                </div>
                <br/>
                <div className="description">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)}/>
                    {errors?.description && (
                        <span>{errors.description?.message}</span>
                    )}
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewProduct
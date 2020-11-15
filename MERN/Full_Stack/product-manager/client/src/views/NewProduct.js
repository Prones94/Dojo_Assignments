import React, { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const NewProduct = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(null)


    const handleSubmit = e => {
        e.preventDefault()
        const newProduct = {
            title,
            price,
            description
        }
        /*
            this will go to server/routes/product.routes.js
            then routed to function in controllers/product.controller.js
            then our server sends back a response with JSON data
        */
        axios.post("https://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log(res);
                navigate("/products")
            })
            .catch(err => {
                console.error(err.response)
                setErrors(err.response?.data?.errors)
            })
    }


    return (
        <div>
            <form onSubmit = {e => {handleSubmit((e))}}>
                <div className="title forms">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" onChange={e=> setTitle(e.target.value)}/>
                    {errors?.title && (
                        <span>{errors.title?.messages}</span>
                    )}
                </div>
                <div className="price forms ">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" onChange={e => setPrice(e.target.value)}/>
                    {errors?.title && (
                        <span>{errors.title?.message}</span>
                    )}
                </div>
                <div className="description forms">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" onChange={e => setDescription(e.target.value)}/>
                    {errors?.description && (
                        <span>{errors.description?.message}</span>
                    )}
                </div>
                <button>Submit</button>
            </form>
        </div>
)
}

export default NewProduct
import React, { useState, useEffect } from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'

export const EditProduct = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log("City to edit: ", res);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [props.id])

    const handleSubmit = evt => {
        evt.preventDefault();

        const editProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.put("http://localhost:8000/api/products/" + props.id, editProduct)
            .then(res => {
                console.log("edited product: ", res
                );
                navigate("/products/"+props.id)
            })
            .catch(err => {
                console.log(err.response)
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div>
            <form onSubmit= {e => {handleSubmit(e)}}>
                <div className="title">
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => {
                        setTitle(e.target.value)
                    }}/>
                    {errors?.title && (
                        <span>{errors.title?.message}</span>
                    )}
                </div>
                <div className="price">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        />
                    {errors?.price && (
                        <span>{errors.price?.message}</span>
                    )}
                </div>
                <div className="description">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        onChange = {e => setDescription(e.target.value)}
                        name="description"
                        value={description}
                        cols="30"
                        rows="10">
                    </textarea>
                    {errors?.description && (
                        <span>{errors.description?.message}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

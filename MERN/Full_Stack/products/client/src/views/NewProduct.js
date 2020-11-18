import React, { useState } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList';

const NewProduct = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [products, setProducts ] = useState([])
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
                setProducts([...products, res.data])
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data?.errors)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Create"/>
            </form>
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default NewProduct
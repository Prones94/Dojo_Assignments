import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const EditProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios
            .get(`http:localhost:8000/api/products/${props.id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    },[props.id])

    const handleSubmit = e  => {
        e.preventDefault()
        const editedProduct = {
            title,
            price,
            description
        }
        axios
            .put(`http://localhost:8000/api/products/${props.id}`, editedProduct)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div className="titleContainer">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        />
                </div>
                <div className="priceeContainer">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                        />
                </div>
                <div className="descriptionContainer">
                    <label htmlFor="description">description:</label>
                    <input
                        type="text"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        />
                </div>
                <input type="submit" value="Edit Product"/>
            </form>
        </div>
    )
}

export default EditProduct

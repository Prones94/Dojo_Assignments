import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'


const ProductList = props => {
    const {products, setProducts } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data))
        .catch(err => {console.log(err)})
    }, [])

    const handleDelete = itemID => {
        axios
            .delete(`http://localhost:8000/api/products/${itemID}`)
            .then(res => {
                const filteredProducts = products.filter(product => {
                    return product._id !== itemID
                })
                setProducts(filteredProducts)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                        <button onClick={e => handleDelete(product._id)}>Delete</button>
                    </div>
                    )
            })}
        </div>
    )
}

export default ProductList
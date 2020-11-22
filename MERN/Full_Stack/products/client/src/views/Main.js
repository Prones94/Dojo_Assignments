import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded ] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
    }, [])
    const removeFromDOM = productID => {
        setProducts(products.filter(product => product._id !== productID))
    }

    const createProduct = product => {
        axios
            .post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...products, res.data])
            })
    }
    return (
        <div>
            <ProductForm
                onSubmitProps={createProduct}
                initialTitle=""
                initialPrice={0}
                initialDescription=""
            />
            <br/>
            {loaded && <ProductList
                products={products}
                removeFromDOM={removeFromDOM}
            />}
        </div>
    )
}

export default Main

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate, Link} from "@reach/router"
import NestedNewProduct from '../components/NestedNewProduct';

const Products = props => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("Getting all products", res)
                setProducts(res.data)
            })
            .catch(err => console.error(err))
    }, []);

    const newProductCreated = newProduct => {
        setProducts([...products, newProduct])
    }

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/products" + id)
            .then(res => {
                console.log(`Deleted city: ${res.data}`);
                const filteredProducts = products.filter((product) => {
                    // return true and KEEP if id is not the correct id
                    return product._id !== id

                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    if (products === null){
        return "Loading...."
    }
    return <div>
        {products.map(product => {
            return (
                <div key={product._id}>
                    {/* <div><NestedNewProduct products={products} setProducts={setProducts} /></div> */}
                    <NestedNewProduct newProductCreated={newProductCreated} />
                    <h1 onClick={e => navigate(`/product/${product._id}`)}>
                    {product.title}
                    </h1>
                    <p>{product.price}</p>
                    <p>{product.descrition}</p>
                    <h3>
                        <Link to={"/products/"+ product._id}>
                            {product.title}
                        </Link>
                    </h3>
                    <button
                        onClick={e => {
                        handleDelete(product._id)
                    }}>Delete</button>
                    <Link to={`/products/${product._id}/edit`}>Edit</Link>
                </div>
            )
        })}
    </div>
}

export default Products
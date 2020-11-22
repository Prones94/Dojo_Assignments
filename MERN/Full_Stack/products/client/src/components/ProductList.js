import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
import DeleteButton from './DeleteButton';


const ProductList = props => {
    const [products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data))
        .catch(err => {console.log(err)})
    }, [])

    const handleDelete = productID => {
        setProducts(products.filter(product => product._id !== productID))
    }

    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <Link to={`/${product._id}`}>{product.title}</Link>
                        <Link to={"/"+product._id+"/edit"}>Edit</Link>
                        <DeleteButton
                            productID={product._id}
                            successCallback={()=>handleDelete(product._id) }/>
                    </div>
                    )
            })}
        </div>
    )
}

export default ProductList
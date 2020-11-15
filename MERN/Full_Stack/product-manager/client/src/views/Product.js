import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


const Product = props => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products" + props.id)
            .then(res => {
                console.log("Getting single product: ", res);
                setProduct(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [props.id])

    if(product === null) {
        return "Loading...."
    }
    return (
    <div key={product._id}>
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
    </div>
    )
}

export default Product
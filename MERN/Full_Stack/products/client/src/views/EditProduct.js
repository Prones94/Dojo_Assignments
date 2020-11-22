import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'

const EditProduct = (props) => {
    const {id}  = props
    const[product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(`http:localhost:8000/api/products/${props.id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
    },[props.id])

    const handleSubmit = product  => {
        axios
            .put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <ProductForm
                onSubmitProp={handleSubmit}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteButton
                productID={product._id}
                successCallback={() => navigate("/")}
            />
        </div>
    )
}

export default EditProduct

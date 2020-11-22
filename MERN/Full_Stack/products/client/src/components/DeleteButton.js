import React from 'react'
import axios from 'axios'
export default function DeleteButton(props) {
    const {productId, successCallback} = props
    const deleteProduct = e => {
        axios
            .delete('https://localhost:8000/api/products/'+productId)
            .then(res => {
                successCallback()
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
import React from 'react'
import { navigate } from "@reach/router"
import axios from 'axios'

const NestedNewProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            description
        }

        axios
            .post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                const newProduct = res.data
                console.log(newProduct)
                props.setProducts([...props.products, newProduct])
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form></form>
        </div>
    )

    a
    return (
        <div>

        </div>
    )
}
import { navigate } from "@reach/router"
import axios from 'axios'

export default NestedNewProduct

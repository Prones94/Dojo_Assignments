import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

const EditPost = props => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [primaryCategory, setPrimaryCategory] = useState("")
    const [secondaryCategory, setSecondaryCategory] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/posts/${props.id}`)
            .then((res) => {
                console.log("Editing post", res)
                setTitle(res.data.setTitle);
                setDescription(res.data.description)
                setPrimaryCategory(res.data.primaryCategory)
                setSecondaryCategory(res.data.secondaryCategory)
                setImgUrl(res.data.imgUrl)
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data?.errors)
            })
    },[props.id])

    const handleSubmit = e => {
        e.preventDefault()
        const editedPost = {
            title,
            description,
            primaryCategory,
            secondaryCategory,
            imgUrl,
        };
        axios
            .put("http://localhost:8000/api/posts/"+ props.id, editedPost)
            .then(res => {
                navigate("/posts")
            })
            .catch(err => {
                console.log(err.response)
                setErrors(err.response.data?.errors)
            })
    }



    return (
        <div>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="title">
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    name="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    />
                    {errors?.title && (
                        <span>{errors.title?.message}</span>
                    )}
                </div>
                <div className="description">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        />
                    {errors?.description && (
                        <span>{errors.description?.message}</span>
                    )}
                </div>
                <div className="primary">
                    <label htmlFor="primaryCategory">Primary Category: </label>
                    <input
                        type="text"
                        name="primaryCategory"
                        onChange={e => setPrimaryCategory(e.target.value)}
                        value={primaryCategory}
                        />
                    {errors?.primaryCategory && (
                        <span>{errors.primaryCategory?.message}</span>
                    )}
                </div>
                <div className="secondary">
                    <label htmlFor="secondaryCategory">Secondary Category: </label>
                    <input
                        type="text"
                        name="secondaryCategory"
                        onChange={e => setSecondaryCategory(e.target.value)}
                        value={secondaryCategory}
                        />
                    {errors?.secondaryCategory && (
                        <span>{errors.secondaryCategory?.message}</span>
                    )}
                </div>
                <div className="imgUrl">
                    <label htmlFor="imgUrl">Image URL: </label>
                    <input
                        type="text"
                        name="imgUrl"
                        onChange={e => setImgUrl(e.target.value)}
                        value={imgUrl}
                        />
                    {errors?.imgUrl && (
                        <span>{errors.imgUrl?.message}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPost
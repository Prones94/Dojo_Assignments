import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from "@reach/router"

const NewPosts = props => {
    /*
        title
        description
        primaryCategory
        secondCategory
        imgUrl
    */
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [primaryCategory, setPrimaryCategory] = useState("")
   const [secondaryCategory, setSecondaryCategory] = useState("")
   const [imgUrl, setImgUrl] = useState("")
   const [errors, setErrors] = useState(null)

   const handleSubmit = evt => {
       console.log("handling submit")
       evt.preventDefault()

       const newPost = {
           title,
           description,
           primaryCategory,
           secondaryCategory,
           imgUrl
       }

       axios
        .post("http://localhost:8000/api/posts/create", newPost)
        .then((res) => {
            navigate("/posts")
        })
        .catch(err => {
            console.log(err.response);
            setErrors(err.response.data?.errors);

        })
   }

    return (
        <div>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="title">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
                    {errors?.title && (
                        <span>{errors.title?.message}</span>
                    )}
                </div>
                <div className="description">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)}/>
                    {errors?.description && (
                        <span>{errors.description?.message}</span>
                    )}
                </div>
                <div className="primary">
                    <label htmlFor="primaryCategory">Primary Category: </label>
                    <input type="text" name="primaryCategory" onChange={e => setPrimaryCategory(e.target.value)}/>
                    {errors?.primaryCategory && (
                        <span>{errors.primaryCategory?.message}</span>
                    )}
                </div>
                <div className="secondary">
                    <label htmlFor="secondaryCategory">Secondary Category: </label>
                    <input type="text" name="secondaryCategory" onChange={e => setSecondaryCategory(e.target.value)}/>
                    {errors?.secondaryCategory && (
                        <span>{errors.secondaryCategory?.message}</span>
                    )}
                </div>
                <div className="imgUrl">
                    <label htmlFor="imgUrl">Image URL: </label>
                    <input type="text" name="imgUrl" onChange={e => setImgUrl(e.target.value)}/>
                    {errors?.imgUrl && (
                        <span>{errors.imgUrl?.message}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPosts
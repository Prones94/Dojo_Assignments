import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router';

const SinglePost = props => {
    const [post,setPost] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts/"+ props.id)
            .then(res => {
                console.log("Post to edit:", res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [props.id])

    const handleDelete = () => {
        axios
            .delete("http://localhost:8000/api/posts/" + post._id)
            .then((res) => {
                console.log(res)
                navigate("/posts")
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const handleLike = () => {
    //     const updatedLike = { likeCount: post.likeCount + 1}
    //     axios
    //         .put("http://localhost:8000/api/posts/" + post._id, updatedLike)
    //         .then(res => {
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    if(post === null) {
        return <p>Loading....</p>
    }

    return (
        <div>/key={post._id}
            <div>
                <h2>
                    <span>{post.likeCount}</span>
                    {" "}
                    {post.title}
                </h2>
                <ul>
                    <li>Primary Category: {post.primaryCategory}</li>
                    <li>Secondary Category: {post.secondaryCategory}</li>
                </ul>
                <p>{post.description}</p>
                {/* <img src="" alt=""/> OnClick={e => {handleLike()}}*/}
                <div>
                    <button onClick={e => {handleDelete()}}>
                        Delete
                    </button>
                    {" "}
                    <Link to={`/posts/${post._id}/edit`}>|{" "}Edit</Link>
                </div>
            </div>
        </div>
    )

}

export default SinglePost
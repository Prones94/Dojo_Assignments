import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "@reach/router"

const Posts = props => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/posts")
            .then((res) => {
                console.log('Getting all posts', res);
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    const handleDelete = delId => {
        axios.delete("http://localhost:8000/api/posts/" + delId).then(res => {
            const filteredPosts = posts.filter(post => {
                return delId !== post._id
            })
            setPosts(filteredPosts)
        })
        .catch(err => {
            console.log(err)
        })
    }
    /*
        function handleLike(post) {
            post.likeCount++
            axios
                .put("http://localhost:8000/api/posts/" + post._id, post)
                .then(res => {
                    seetPosts([...posts])
                })
                .catch(err => {console.log(err)})
        }
    */

    const handleLike = post => {
        const updatedPost = {likeCount: post.likeCount + 1}

        axios
            .put("http://localhost:8000/api/posts/" + post._id, updatedPost)
            .then(res => {
                const updatedPosts = posts.map(currPost => {
                    let data = currPost._id === post._id ? res.data : currPost
                    return data
                })
                setPosts(updatedPosts)
            })
            .catch(err => console.log(err))
    }

    if (posts === null) {
        return "Loading....."
    }

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post._id}>
                        {/* <img
                            src=" "
                            alt=="Likes"
                            onClick={e => {handleLike(post)}}
                        */}
                        <h2><span>{post.likeCount}</span> <Link to={`/posts/${post._id}`}>{post.title}</Link></h2>
                        <ul>
                            <li>Primary Category: {post.primaryCategory}</li>
                            <li>Second Category: {post.secondaryCategory}</li>
                        </ul>
                        <p>{post.description}</p>
                        <div>
                            <button
                                onClick={e => {handleDelete(post._id)}}>
                                Delete
                            </button>
                            {" "}
                            <Link to={`/posts/${post._id}/edit`}>|{" "}Edit</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Posts


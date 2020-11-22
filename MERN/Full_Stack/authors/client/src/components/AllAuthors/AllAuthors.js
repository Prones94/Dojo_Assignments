import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import './AllAuthors.css'

const AllAuthors = props => {
    const { authors, setAuthors } = props

    const handleDelete = authorID => {
        axios
            .delete(`http://localhost:8000/api/authors/${authorID}`)
            .then(res => {
                const filteredAuthors = authors.filter(author => {
                    return author._id !== authorID
                })
                setAuthors(filteredAuthors)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div className="authorlist">
            <table className="authorlist__header">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {authors.map((author, i) => {
                    return (
                        <tbody className="authorlist__body">
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <button
                                        className="authorlist__edit"
                                        onClick={e => navigate(`/edit/${author._id}`)}
                                    >Edit</button>
                                    <button
                                        className="authorlist__delete"
                                        onClick={e => handleDelete(author._id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default AllAuthors
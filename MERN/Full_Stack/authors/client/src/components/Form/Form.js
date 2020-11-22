import React, { useState } from 'react'


const Form = props => {
    const {formData, setFormData, errors} = props

    return (
        <div className="form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                onChange={e => setFormData({name: e.target.value})}
                value={formData.name}
                />
                {errors?.name && (
                    <p className="form__error">{errors.name?.message}</p>
                )}
        </div>
    )
}
export default Form
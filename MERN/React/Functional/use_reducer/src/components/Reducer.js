import React, { useState, useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'error':
        return {
            ...state,
            [action.type]:action.payload
        };
    }
}
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
const ACTIONS = {

}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type : ACTIONS.})
    }

    function handleChange = evt => {
        const { name, value } = evt.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

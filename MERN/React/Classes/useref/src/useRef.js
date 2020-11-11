import React, { useRef } from 'react'

export default =  () => {
    const input = useRef();

    function focusInput() {
        input.current.focus();
    }

    return (
        <>
        <input reft={input}/>
        <button onClick={focusInput}>Focus Me!</button>
        </>
    )
    }

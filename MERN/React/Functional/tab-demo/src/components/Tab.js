import React, { useState } from "react"

const Tab = props => {
    const [selected, setSelected] = useState(0)
    return (
        <div>
        <header>
            {props.tabContent.map((tab, idx) => {
                return(
                    <span
                        onClick={evt => {
                            setSelected(idx)
                        }}
                    >
                        {tab.label}
                    </span>
                )
            })}
        </header>
        <main>
            <p>{props.tabContent[selected].content}</p>
        </main>
        </div>
    )
}

export default Tab
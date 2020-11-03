import React, { useState } from 'react'

const Tab = (props) => {
    const {idx, label, setTabs, tabs} = props

    const handleClick = () => {
        const prevTabs = [...tabs] // copy of all tabs 
        prevTabs.map(tab => tab.isSelected = false) // Change copied all tags isSelected to false
        const selectedTab = {...tabs[idx]} // Select the singular tab using spread operator original array index
        selectedTab.isSelected = true //Change isSelected to true
        prevTabs[idx] = selectedTab // Replace original at that idx with the new object
        setTabs(prevTabs) // now replace original array with new data of the original array
    }
    return (
        <div className="tab">
            <button onClick={handleClick}>{label}</button>
        </div>
    )
}

export default Tab
import React from "react";
import './ToDoAddButton.css'
import {ToDoContext} from '../../Context/ToDoContext'

function ToDoAddButton(){
    const {OpenPortal,
        setOpenPortal
    } = React.useContext(ToDoContext)
    return (
        <button 
        className="ToDoAddButton" 
        onClick={()=>{
            OpenPortal ? setOpenPortal(false) : setOpenPortal(true)
        }}
        >+</button>
    )
}

export {ToDoAddButton};
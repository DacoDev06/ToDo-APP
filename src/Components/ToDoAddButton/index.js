import React from "react";
import './ToDoAddButton.css'
import {ToDoContext} from '../../Context/ToDoContext'

function ToDoAddButton(){
    const {
        setOpenModal
    } = React.useContext(ToDoContext)
    return (
        <button 
        className="ToDoAddButton" 
        onClick={(state)=>{
            setOpenModal(state=>!state)
        }}
        >+</button>
    )
}

export {ToDoAddButton};
import React from "react";
import './ToDoSearch.css'

function ToDoSearch({InputValue,setInputValue}){
    return (
        <input 
            className="ToDoSearch" 
            placeholder="Filtra ToDos"
            value={InputValue}
            onChange={event=>{
                setInputValue(event.target.value)
            }}
        >
        </input>
    )
}

export {ToDoSearch};
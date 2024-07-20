import React from "react";
import './ToDoSearch.css'
import { ToDoContext } from "../../Context/ToDoContext";

function ToDoSearch(){
    const {
        InputValue,
        setInputValue
    } = React.useContext(ToDoContext)
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
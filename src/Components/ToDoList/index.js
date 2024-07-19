import React from "react";
import './ToDoList.css'

function ToDoList(props){
    return (
        <div className="List-container">
            <ul className="ToDoList">
                {props.children}
            </ul>
        </div>
    )
}

export {ToDoList};
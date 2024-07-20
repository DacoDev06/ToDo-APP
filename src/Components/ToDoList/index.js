import React from "react";
import './ToDoList.css'

function ToDoList({children}){
    return (
        <div className="List-container">
            <ul className="ToDoList">
                {children}
            </ul>
        </div>
    )
}

export {ToDoList};
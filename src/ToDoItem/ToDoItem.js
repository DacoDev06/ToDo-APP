import React from "react";
import './ToDoItem.css'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

function ToDoItem({text,isCompleted,changeStateToDo,deleteToDo}){
    return (
        <li className="Item">
            <AiOutlineCheckCircle 
                className={`icon icon-check ${isCompleted && "icon-check--activate"}`}
                onClick={changeStateToDo}
            />
            <p className={`Item-name ${isCompleted && "Item-name--completed"}`}>{text}</p>
            <RxCrossCircled 
                className={`icon icon-cross`}
                onClick={deleteToDo}
            />
        </li>
    )
}

export {ToDoItem};
import React from "react";
import './Tittle.css'

function Title({completedToDos,totalToDos}){
    return(
        <h1 className="Title">
            Haz realizado <span className="Title-counter">{completedToDos}</span> de <span className="Title-counter">{totalToDos}</span> ToDos
        </h1>
    )
}

export {Title}
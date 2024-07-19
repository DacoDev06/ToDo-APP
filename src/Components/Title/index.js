import React from "react";
import './Tittle.css'

function Title({completedToDos,totalToDos}){
    return(
        <h1 className="Title">
            {totalToDos!==0 ? 
            <>Haz realizado <span className="Title-counter">{completedToDos}</span> de <span className="Title-counter">{totalToDos}</span> ToDos</> 
            : 
            <>Empecemos creando un ToDo!</>}
            
        </h1>
    )
}

export {Title}
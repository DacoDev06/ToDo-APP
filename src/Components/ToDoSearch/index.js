import React from "react";
import './ToDoSearch.css'
import { ToDoContext } from "../../Context/ToDoContext";
import { RxCross2 } from "react-icons/rx";

function ToDoSearch(){
    const {
        InputValue,
        setInputValue,
    } = React.useContext(ToDoContext)
    return (
        <div className="inputSearchContainer">
            <input 
                className="ToDoSearch" 
                placeholder="Filtra ToDos"
                value={InputValue}
                onChange={event=>{
                    setInputValue(event.target.value)
                }}
            >
                
            </input>
            <RxCross2 
            className="inputCross"
            onClick={()=>setInputValue('')

            } 
            />
        </div>
    )
}

export {ToDoSearch};
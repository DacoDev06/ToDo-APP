import React from 'react';
import './CancelToDo.css'
import { ToDoContext } from '../../../../Context/ToDoContext';

function CancelToDo(){
    const {
        setOpenModal,
        setAddToDoInput
    } = React.useContext(ToDoContext)
    return(
        <button 
        className="cancelToDoButton"
        onClick={()=>{
            setAddToDoInput('')
            setOpenModal(state => !state)
        }}
        >
            Cancelar
        </button>
    )
}

export {CancelToDo};
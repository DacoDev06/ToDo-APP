import React from 'react'
import './AddToDo.css'
import { ToDoContext } from '../../../../Context/ToDoContext'
function AddToDo(){
    const {
        addToDoInput,
        setAddToDoInput,
        setOpenModal,
        addToDo
    } = React.useContext(ToDoContext)
    return(
        <button 
        className="addToDoButton"
        onClick={()=>{
            if(addToDoInput){
                addToDo(addToDoInput)
                setAddToDoInput('')
                setOpenModal(false)
            } 
        }}
        >
            Añadir
        </button>
    )
}

export {AddToDo}
import React from 'react';
import './AddToDoInput.css'
import { ToDoContext } from '../../../Context/ToDoContext';
function AddToDoInput(){
    const {
        addToDoInput,
        setAddToDoInput
    } = React.useContext(ToDoContext)
    return(
        <input 
            className="addToDoInput"
            placeholder='Ingresa nombre del ToDo'
            value={addToDoInput}
            onChange={event => {
                setAddToDoInput(event.target.value)
                }
            }
        >
        </input>
    )
}

export {AddToDoInput};
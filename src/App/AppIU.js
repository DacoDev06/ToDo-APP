import { Title } from '../Components/Title';
import {ToDoSearch} from '../Components/ToDoSearch'
import {ToDoList} from '../Components/ToDoList'
import {ToDoItem} from '../Components/ToDoItem'
import {ToDoAddButton} from '../Components/ToDoAddButton'
import {LoadingToDos} from '../Components/LoadingToDos'
import React from 'react';
import { ToDoContext } from '../Context/ToDoContext';



function AppUI(){
    const {
      loading,
      error,
      filterToDos,
      changeStateToDo,
      deleteToDo
    } = React.useContext(ToDoContext)

    return(
      <>
        <div className='ToDo'>

          <Title/>
          <ToDoSearch/>

          <ToDoList>
            {loading && <>
            <LoadingToDos/>
            <LoadingToDos/>
            <LoadingToDos/>
            <LoadingToDos/>
            <LoadingToDos/>
            </>}         
            {error && <>Hubo un error</>}
            {(!loading && filterToDos.length === 0) && <>Crea un ToDo</>}
            {(!loading && filterToDos.length !==0) && filterToDos.map(todo =>
              <ToDoItem
                key={todo.id}
                text ={todo.text}
                isCompleted={todo.isCompleted}
                changeStateToDo={()=>changeStateToDo(todo.id)}
                deleteToDo={()=>deleteToDo(todo.id)}
              />
            )}
          </ToDoList>
        
        </div>
          <ToDoAddButton/>
    </>
    )
}

export {AppUI}
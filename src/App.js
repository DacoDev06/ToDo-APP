import './App.css';
import { Title } from './Title/Title.js';
import {ToDoSearch} from './ToDoSearch/ToDoSearch.js'
import {ToDoList} from './ToDoList/ToDoList.js'
import {ToDoItem} from './ToDoItem/ToDoItem.js'
import {ToDoAddButton} from './ToDoAddButton/ToDoAddButton.js'
import React from 'react';


// const Todos = [
//   {text:"Cocinar con la madrecita",id:1,isCompleted : true},
//   {text:"Comer pene",id:2,isCompleted : false},
//   {text:"Ir al gym",id:3,isCompleted : false},
//   {text:"Ir al gym",id:4,isCompleted : false},
// ]

// localStorage.getItem
// localStorage.setItem
// localStorage.clear
// localStorage.removeItem



function ToDoApp(){
  const [ToDos,setToDos] = React.useState(()=> JSON.parse(localStorage.getItem('ToDos')) || [])
  const [InputValue,setInputValue] = React.useState('')

  const filterToDos = ToDos.filter(todo => todo.text.toLowerCase().includes(InputValue.toLowerCase())
  //ERROR EN EL INCLUDES
  )

  function saveToDos(newToDos){
    setToDos(newToDos)
    localStorage.setItem('ToDos',JSON.stringify(newToDos))
  }

  const changeStateToDo = (id)=>{
    const newToDos = [...ToDos]
    const toDoIndex = newToDos.findIndex(todo=> //Diferencia entre indexOf y FindIndex??
      todo.id === id
    )
    if(newToDos[toDoIndex].isCompleted){
      newToDos[toDoIndex].isCompleted=false
    }else{
      newToDos[toDoIndex].isCompleted= true
    }

    saveToDos(newToDos)
  }

  const deleteToDo = id=>{
    const newToDos = [...ToDos]
    const indexToDo = newToDos.findIndex(
      todo => todo.id === id
    )
    newToDos.splice(indexToDo,1)
    saveToDos(newToDos)
  }
  

  const totalToDos = ToDos.length
  const completedToDos = ToDos.filter( todo => todo.isCompleted === true).length

  return (
    <>
      <div className='ToDo'>

        <Title 
          totalToDos={totalToDos}
          completedToDos={completedToDos}
        />
        <ToDoSearch
          InputValue={InputValue}
          setInputValue={setInputValue}
        />

        <ToDoList>
          {filterToDos.map(todo =>
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

export {ToDoApp};

import React from 'react';
import './App.css';
import { AppUI } from './AppIU.js';
import {useLocalStorage} from '../Hooks/localStorage.js'

// const Todos = [
//   {text:"Cocinar con la madrecita",id:1,isCompleted : true},
//   {text:"cocinar",id:2,isCompleted : false},
//   {text:"Ir al gym",id:3,isCompleted : false},
//   {text:"Ir al gym",id:4,isCompleted : false},
// ]


function ToDoApp(){
  const {
    item:ToDos,
    saveItem:saveToDos,
    loading,
    error
  } = useLocalStorage('ToDos',[])
  
  const [InputValue,setInputValue] = React.useState('')
  const filterToDos = ToDos.filter(todo => todo.text.toLowerCase().includes(InputValue.toLowerCase())
  //ERROR EN EL INCLUDES
  )

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
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      InputValue={InputValue}
      setInputValue={setInputValue}
      loading={loading}
      error={error}
      filterToDos={filterToDos}
      changeStateToDo={changeStateToDo}
      deleteToDo={deleteToDo}
    />

  )
}

export {ToDoApp};

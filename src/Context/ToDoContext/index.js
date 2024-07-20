import React from "react";
import { useLocalStorage } from "../../Hooks/localStorage";

const ToDoContext = React.createContext()

function ToDoContextProvider({children}){
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
        <ToDoContext.Provider value={
            {
            totalToDos,
            completedToDos,
            InputValue,
            setInputValue,
            loading,
            error,
            filterToDos,
            changeStateToDo,
            deleteToDo
            }
        }>
            {children}
        </ToDoContext.Provider>
      )
}

export {ToDoContext,ToDoContextProvider}



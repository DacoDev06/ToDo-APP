import React from "react"

const useLocalStorage = (itemName,initialValue)=>{
    const [item,setItem] = React.useState(JSON.parse(localStorage.getItem(itemName)) || initialValue)
  
    function saveToDos(newToDos){
      setItem(newToDos)
      localStorage.setItem(itemName,JSON.stringify(newToDos))
    }
    return [item,saveToDos]
  }
  export {useLocalStorage}
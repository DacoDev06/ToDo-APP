import React from "react"

const useLocalStorage = (itemName,initialValue)=>{
    const [item,setItem] = React.useState(JSON.parse(localStorage.getItem(itemName)) || initialValue)
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(false)

    React.useEffect(()=>{
      setTimeout(()=>{
          try{

            const localItem = localStorage.getItem(itemName)
            if(!localItem){
              localStorage.setItem(itemName,JSON.stringify(initialValue))
            }else{
              setItem(JSON.parse(localItem))
            }
            setLoading(false)
          }catch(error){
            setLoading(false)
            setError(true)
          }
        },2000)
          
    // eslint-disable-next-line
    },[])


    function saveItem(newToDos){
      setItem(newToDos)
      localStorage.setItem(itemName,JSON.stringify(newToDos))
    }
    return {
      item,
      saveItem,
      loading,
      error
    }
  }
  export {useLocalStorage}
import { Title } from '../Components/Title';
import {ToDoSearch} from '../Components/ToDoSearch'
import {ToDoList} from '../Components/ToDoList'
import {ToDoItem} from '../Components/ToDoItem'
import {ToDoAddButton} from '../Components/ToDoAddButton'



function AppUI({
    totalToDos,
    completedToDos,
    InputValue,
    setInputValue,
    filterToDos,
    changeStateToDo,
    deleteToDo
}){
    return(
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

export {AppUI}
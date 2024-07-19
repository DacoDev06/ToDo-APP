import './LoadingToDos.css'

function LoadingToDos(){
    return(
        <li className="loadingTodos--Item">
            <span className="loadingToDo--icon"></span>
            <p className="loadingToDo--text"></p>
            <span className="loadingToDo--icon"></span>
        </li>
    )
}

export {LoadingToDos};
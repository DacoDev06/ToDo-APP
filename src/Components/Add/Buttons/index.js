import './Buttons.css'
import {AddToDo} from './AddToDo'
import {CancelToDo} from './CancelToDo'
function Buttons(){
    return(
        <div className='buttons'>
            <CancelToDo/>
            <AddToDo/>
        </div>
    )
}
export {Buttons};
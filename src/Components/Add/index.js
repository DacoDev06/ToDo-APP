import './add.css'

import {AddToDoInput} from './AddToDoInput'
import {TitleText} from './TitleText'
import {Buttons} from './Buttons'

function Add(){
    return(
        <div className='ModalContainer'>
            <TitleText/>
            <AddToDoInput/>
            <Buttons/>
        </div>
    )
}
export {Add};
import React from 'react';
import './App.css';
import { AppUI } from './AppIU.js';
import {ToDoContextProvider} from '../Context/ToDoContext'

function ToDoApp(){
  return (
    <ToDoContextProvider>
      <AppUI/>
    </ToDoContextProvider>
  )
}

export {ToDoApp};

import React, { useEffect } from 'react'
import Task from './Task'
import { useState } from 'react'

import { addTask, getToDoList, updateTask, deleteTask } from '../utils/HandleApi'
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase'

const ToDoList = () => {

  const [task, setTask] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [taskId, setTaskId] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    getToDoList(setTask)
  }, [])

  const updateMode =(_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTaskId(_id)
  }

  return (
    <div className='container'>
        <h1>TO DO App</h1>
        <div className='top'>
            
            <input 
            type='text' 
            placeholder='Add a task'
            value={text}
            onChange={(e) => setText(e.target.value)} />

            <div 
            className='add' 
            onClick={isUpdating? 
                () => updateTask(taskId, text, setText, setTask, setIsUpdating)
                : () => addTask(text, setText, setTask)}>
                {isUpdating? "Update": "Add"}
            </div>
        </div>

        <div className='list'>
            {task.map((item) => <Task 
            key={item._id} 
            text={item.text} 
            updateMode = {()=> updateMode(item._id, item.text)}
            deleteToDo={() => deleteTask(item._id, setTask)} />)}
            
        </div>

        <div className='logout'>
          <p onClick={() => {
                  auth.signOut();
                  navigate('/auth')
                } } 
          style={{
                              marginTop:"10px",
                              cursor:"pointer",
                              textDecoration:"underline",
                          }}>Logout
          </p>
        </div>
        
      
    </div>
  )
}

export default ToDoList

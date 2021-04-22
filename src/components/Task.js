import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
  return (
    <div className='task'>
      <h3>{props.task}</h3>
      <p>{props.day}</p>
    </div>
  )
}

export default Task

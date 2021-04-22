import React from 'react'
import Task from './Task'


const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((pp) => (
      <Task key={pp.id} task={pp.text} day={pp.day}/>
      ))}
    </>

  )
}



export default Tasks

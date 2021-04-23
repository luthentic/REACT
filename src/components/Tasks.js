import React from 'react'
import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((pp) => (
      <Task key={pp.id} task={pp} 
      onDelete={onDelete}
      onToggle={onToggle}   
      />
      ))}
    </>

  )
}



export default Tasks

import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState( [
    {
    id: 1,
    text: 'DOCTOR CLAPLPQ ',
    day: 'FEB 12',
    reminder: true,
  },
  {
    id: 2,
    text: 'DOCTOR VKOKOPEKGP',
    day: 'MAR 14',
    reminder: true,
  },
  {
    id: 4,
    text: 'DOCTOR PLPALPWLP',
    day: 'MAY 2',
    reminder: false,
  }
])
 // delte
  const deleteTask = (id) =>{
    setTasks(tasks.filter((abc) => abc.id!==id))
  }
 // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((plpl)=>plpl.id ===id ?
    {...plpl, reminder: !plpl.reminder} : plpl //spread operator   rest operator
    ))
  }

  return (
    <div className="container">
      <Header  title='opopopopo'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : 'No tasks'}
    </div>
    
  );
}

export default App;

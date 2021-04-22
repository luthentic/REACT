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
    id: 3,
    text: 'DOCTOR PLPALPWLP',
    day: 'MAY 2',
    reminder: false,
  }
])

  return (
    <div className="container">
      <Header  title='opopopopo'/>
      <Tasks tasks={tasks}/>
    </div>
    
  );
}

export default App;

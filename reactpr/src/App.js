import {useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
// component must be capital
// array and object must deep copy reference data type

export default App;

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

let lee ='LEE'
let css ={color:'red', fontSize:'30px'}

function App() {

  let [LEE1,LEE2] = useState(['LEEE1', 'LEEE2','LEEE3']);

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={ css }>PPLLLPLP</div>
      </div>
      <div className="list">
        <h3>{LEE1[0] }</h3>
        <p>FEB 13</p>
        <hr/>
        <h3>{LEE1[1] }</h3>
        <p>FEB 13</p>
        <hr/>
        <h3>{LEE1[2] }</h3>
        <p>FEB 13</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

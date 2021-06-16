import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { func } from 'prop-types';

let lee ='LEE'
let css ={color:'red', fontSize:'30px'}

function App() {

  let [LEE1,LEE2] = useState(['LEEE1', 'LEEE2','LEEE3']);
  let [GOOD1,GOOD2] = useState(0)

  function Change(){
    let newArray = [...LEE1]
    newArray[0] = 'KIM1'
    LEE2(newArray)
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={ css }>PPLLLPLP</div>
      </div>
      <button onClick={Change}>PPPPP</button> 
      <div className="list">
        <h3>{LEE1[0] } <span onClick={()=>{GOOD2(GOOD1 + 1)}}>👍</span> {GOOD1} </h3> {/* onclick has only function  */}
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

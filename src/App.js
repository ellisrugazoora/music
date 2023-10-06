import logo from './logo.svg';
import './App.css';
import { hello_world, placeholder } from './functions';
import Testcomponent from './Testcomponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
var mapping_object = {};

function App() {
  const [number, SetNumber] = useState(parseInt(localStorage.getItem('number')))
  const [arr, SetArray] = useState(0)
  var output = [];
  /*
  window.addEventListener('keydown', (e) => {
    //SetArray(arr + 1)
    output.push({note: e.key, spacing: 1})
    //console.log(output)
  });*/
  useEffect(() => {
    localStorage.setItem('number', number.toString());
  }, [number]);
  function print_storage(){
    SetNumber(number + 1)
    console.log("the stored number: " + localStorage.getItem('number'))
  }/*
  useEffect(() => {
    

  }, [])*/
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The music app. {placeholder("text", "Objective for music app")}
        </p>
        {output}
        {arr}
        <img src={logo} className="App-logo" alt="logo" />
        <div hidden="true" className='capability tests'>
          {placeholder("Text", "The interface of an application that will achieve the objective that corresponds to this app")}
          <button onClick={hello_world}>hello world</button>
          <button onClick={print_storage}>test local storage</button>
          <button onClick={function(){SetNumber(0)}}>Set number to zero</button>
          <Testcomponent test="Test component props" location="Testcomponents"/>
          <Testcomponent test="Test memory through hello world button" location="memory.js" />
          
        </div>
        <div onKeyDown={function(){console.log("keydown!")}}>
          Proofs of concepts <br></br>
          {placeholder("button", "User input")}
          {output}
          {placeholder("Visual", "inputdependent visualization")}
          {placeholder("input (text or number)", "configure the model")}<br></br>
          {placeholder("input (text or number)", "configure success metric")}<br></br>
          {placeholder("text", "object representing the input-dependent music-representing model that will be evaluated")}
        </div>
        
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reaction
        </a>*/}
      </header>
    </div>
  );
}

export default App;

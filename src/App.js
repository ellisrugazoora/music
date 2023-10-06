import logo from './logo.svg';
import './App.css';
import { hello_world, placeholder } from './functions';
import Testcomponent from './Testcomponent';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [number, SetNumber] = useState(parseInt(localStorage.getItem('number')))

  useEffect(() => {
    localStorage.setItem('number', number.toString());
  }, [number]);
  function print_storage(){
    SetNumber(number + 1)
    //number++;
    //let n = localStorage.getItem('number')
    console.log("the stored number: " + localStorage.getItem('number'))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The music app. {placeholder("text", "Objective for music app")}
        </p>
        {placeholder("Text", "The interface of an application that will achieve the objective that corresponds to this app")}
        <button onClick={hello_world}>hello world</button>
        <button onClick={print_storage}>test local storage</button>
        <button onClick={function(){SetNumber(0)}}>Set number to zero</button>
        <Testcomponent test="Test component props" location="Testcomponents"/>
        <Testcomponent test="Test memory through hello world button" location="memory.js" />
        {placeholder("button", "User input")}
        {placeholder("Visual", "inputdependent visualization")}
        {placeholder("input (text or number)", "configure the model")}
        {placeholder("input (text or number)", "configure success metric")}
        {placeholder("text", "object representing the input-dependent music-representing model that will be evaluated")}
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

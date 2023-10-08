import logo from './logo.svg';
import './App.css';
import { hello_world, placeholder } from './functions';
import Testcomponent from './Testcomponent';
import { useState } from 'react';
import { useEffect } from 'react';
import Assign from './Assign';
var mapping_object = {};

function App() {
  const [number, SetNumber] = useState(parseInt(localStorage.getItem('number')))
  const [array, SetArray] = useState([1])
  var output = [];
  
  useEffect(() => {//this is for storage
    localStorage.setItem('number', number.toString());
  }, [number]);
  function print_storage(){
    SetNumber(number + 1)
    console.log("the stored number: " + localStorage.getItem('number'))
  }
  const [vis, SetVis] = useState("true")
  
  function handleKeyDown(event) {
    console.log('Key pressed and arr:', event.key, array);
    //let cheese = arr.push(1)
    SetArray(x => [...x,event.key])
    //SetArray(function(input){input.push(1); return input})
    /*
    SetArray((x) => {
      var n = x.push(event.key)
      return x
      //return event.key
    })*/
  }

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The music app. {placeholder("text", "Objective for music app")}
        </p>
        The value of array: {array}
        {/*<button onClick={() => {SetArray(x => 9)}}>increment array</button>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={function(){let obj = {"": "true", "true": ""}; SetVis(obj[vis])}}>Show/hide: Test</button>
        <div hidden={vis} className='capability tests'> {/*Add a button that toggles visibility*/}
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
          {placeholder("Visual", "inputdependent visualization")}<br></br>
          {placeholder("input (text or number)", "configure the model")}<br></br>
          {placeholder("input (text or number)", "configure success metric")}<br></br>
          {placeholder("input (text or number)", "configure level of assistance")}<br></br>
          {placeholder("text", "object representing the input-dependent music-representing model that will be evaluated")}
          <Assign placeholder="Placeholder fxn input" map="testmap"/>
        </div>
      </header>
    </div>
  );
}

export default App;

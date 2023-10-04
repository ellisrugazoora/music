import logo from './logo.svg';
import './App.css';
import { hello_world } from './textfxn';
import { placeholder } from '../../repo3/business-finder'
function App() {
  var element1 = placeholder("hello", "meloooo")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element1}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reaction
        </a>
      </header>
    </div>
  );
}

export default App;

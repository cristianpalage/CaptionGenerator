import logo from './cc-logo.png';
import './App.css';
import DisplayImage from './DisplayImage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://testflight.apple.com/join/lR5KtCeT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the App
        </a>
      </header>
      {/* <DisplayImage /> */}
    </div>
  );
}

export default App;

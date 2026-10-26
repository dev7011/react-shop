import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style= { { display: "flex", justifyContent: "center", alignItems: "Center", height: "100vh" }}>


      <h1 className="text-3xl text-primary font-bold underline">
      Hello world!
      </h1>

      <header className="App-header" style= { { display: "flex", justifyContent: "center", alignItems: "Center" }} >
        <img src={logo} className="App-logo" style= { { height: "50px"}} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

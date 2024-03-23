
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <Weather defaultCity="Lisbon"/>
       <footer>
       This was coded by Siphokazi Muhauli, and is 
      <a href="https://github.com/naledimuhauli/react-weather-app"
      target="_blank"
      rel="noreferrer"> open-sourced on GitHub</a>
      </footer>
      </header>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Llegó AppleFix a la ciudad
        </p>
        <a
          className="App-link"
          href="https://applefix.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitá AppleFix
        </a>
      </header>
    </div>
  );
}

export default App;

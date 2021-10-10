import logo from './logo.png';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './App.css';

function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Heading">
        Librarie
        </div>
        <p>
        A library management application
        </p>
        <Button variant="primary" onClick={handleClick}>Enter</Button>
      </header>
    </div>
  );
}

export default App;

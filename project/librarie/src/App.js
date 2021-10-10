import logo from './logo.png';
import { Button } from 'react-bootstrap';
import './App.css';


function App() {
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
        <Button variant="primary">Enter</Button>
      </header>
    </div>
  );
}

export default App;

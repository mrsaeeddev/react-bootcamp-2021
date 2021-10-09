import logo from './logo.png';
import './App.css';
import DashBoard from './components/DashBoard';

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
        <DashBoard />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FundTransfer from './components/FundTransfer';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element=<Login /> />
          <Route path='/Dashboard' element=<Dashboard /> />
          <Route path='/FundTransfer' element=<FundTransfer /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

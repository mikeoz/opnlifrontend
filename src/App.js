import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PersonForm from './PersonForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> or just display this for success.</p>
          <Link to="/person-form" className="App-link">Go to Person Form</Link>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
        <Route path="/person-form" component={PersonForm} />
      </div>
    </Router>
  );
}

export default App;
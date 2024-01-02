import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Route along with others
import TestPage from './TestPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> or Review This Start Point: 1-a.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/test-page" className="App-link">Test Page</Link>
        </header>
        {/* Define the Route for TestPage */}
        <Route path="/test-page" component={TestPage} />
      </div>
    </Router>
  );
}

export default App;

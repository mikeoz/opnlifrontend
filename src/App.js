import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Router and Link
import TestPage from './TestPage'; // Make sure you have this component created
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router> {/* Wrap the content in a Router */}
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
          {/* Add the new Link for TestPage */}
          <Link to="/test-page" className="App-link">
            Test Page
          </Link>
        </header>
      </div>
    </Router>
  );
}

export default App;

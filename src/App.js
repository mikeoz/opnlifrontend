import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestPage from './TestPage'; // Import the TestPage component
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
          {/* Add a Link component that links to "/test-page" */}
          <Link to="/test-page">
            <button className="App-link">Test Page</button>
          </Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* Set up a Route for TestPage */}
        <Route path="/test-page" component={TestPage} />
      </div>
    </Router>
  );
}

export default App;

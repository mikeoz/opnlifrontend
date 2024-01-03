import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
          {/* Update Link to TestPage */}
          <Link to="/test-page" className="App-link">Test Page</Link>
        </header>
        {/* Update Routes and Route components */}
        <Routes>
          <Route path="/" element={<div><h1>Welcome to the Main Page</h1><p>This is the content of the main page.</p></div>} />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

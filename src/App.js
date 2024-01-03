import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TestPage from './TestPage'; // Ensure this is the correct path
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
          <Link to="/TestPage" className="App-link">Test Page</Link>
        </header>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/TestPage" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Main content as a separate component
function MainContent() {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>This is the content of the main page.</p>
    </div>
  );
}

export default App;

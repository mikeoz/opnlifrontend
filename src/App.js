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
          {/* Corrected the path to be lowercase and consistent */}
          <Link to="/test-page" className="App-link">Test Page</Link>
        </header>
        <Routes>
          {/* The main content is directly included */}
          <Route path="/" element={
            <div>
              <h1>Welcome to the Main Page</h1>
              <p>This is the content of the main page.</p>
            </div>
          } />
          {/* Path corrected to be lowercase */}
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

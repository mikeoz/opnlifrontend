import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // Import Switch along with other components
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/test-page" className="App-link">Test Page</Link> {/* Link to TestPage */}
        </header>
        <Switch> {/* Only the first matching Route is rendered */}
          <Route exact path="/">
            <div>
              {/* Content of the main page */}
              <h1>Welcome to the Main Page</h1>
              <p>This is the content of the main page.</p>
            </div>
          </Route>
          <Route path="/test-page" component={TestPage} /> {/* Route to TestPage */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

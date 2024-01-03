import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PersonForm from './PersonForm'; // Make sure this path is correct!

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h2>{new Date().toLocaleDateString()}</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/first">First Page</Link> | <Link to="/second">Second Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<PersonForm />} /> {/* Changed to PersonForm */}
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <div>Welcome to the home page!</div>;

const SecondPage = () => (
  <div>
    This is the Second Page. <Link to="/first">Go to First Page</Link> | <Link to="/">Go Home</Link>
  </div>
);

export default App;

A new Person Form has been created in this React.js project and version Opnli_Crash_5_OpnliFrontEnd_PC-12-1_PersonForm_Baseline_03JAN24.txt contains the current code, which is shown below.

The task is to:

1.  Modify the code in App.js so that the Person Form page is displayed when the link for First Page is selected;

2.  Modify the code in the PersonForm.js file to add a link that returns the user to the Home page when it is selected; and 

3.  Write a short tutorial explaining to a Beginner Developer the changes that were made and why they will be effective in accomplishing these purposes.

The current App.js code is as follows:

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <div>Welcome to the home page!</div>;
const FirstPage = () => (
  <div>
    This is the First Page. <Link to="/second">Go to Second Page</Link> | <Link to="/">Go Home</Link>
  </div>
);
const SecondPage = () => (
  <div>
    This is the Second Page. <Link to="/first">Go to First Page</Link> | <Link to="/">Go Home</Link>
  </div>
);

export default App;


The current PersonForm.js code is as follows:

// PersonForm.js
const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addPerson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: personName, age: personAge }),
    });
  
    const data = await response.json();
    console.log(data);
  };
  
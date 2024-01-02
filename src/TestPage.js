import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function TestPage() {
  return (
    <div>
      <h1>This is the Test Page.  Deployed 02JAN24_v1</h1>
      <p>Welcome to your new page!</p>
      {/* Add a Link to navigate back to the main page */}
      <Link to="/" className="App-link">
        Return to Main Page
      </Link>
    </div>
  );
}

export default TestPage;

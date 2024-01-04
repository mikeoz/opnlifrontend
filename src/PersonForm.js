import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonForm = () => {
  // State to store input field values
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [opnliId, setOpnliId] = useState('');
  const [result, setResult] = useState(''); // To store and display the response or errors

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Data object structured as per the Node.js application
    const data = {
      person_id: opnliId,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
    };

    // Fetch API to send the data to the server
    try {
      const response = await fetch('https://wl9vtg73ee.execute-api.us-west-2.amazonaws.com/Production/add-person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      // Update the result state to display the response
      if (response.ok) {
        setResult('Person added: ' + JSON.stringify(responseData));
      } else {
        throw new Error('Failed to add person');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  // JSX for the form, similar structure to the index.html form
  return (
    <div>
      <header>Opnli</header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          placeholder="Middle Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={opnliId}
          onChange={(e) => setOpnliId(e.target.value)}
          placeholder="Opnli ID"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display the result or error message */}
      <p>{result}</p>

      {/* Link to return to home, similar to the footer in index.html */}
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default PersonForm;

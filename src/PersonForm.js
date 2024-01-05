import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [opnliId, setOpnliId] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      person_id: opnliId,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
    };

    try {
      // Using the updated API endpoint
      const response = await fetch('https://5xokx2kf59.execute-api.us-west-2.amazonaws.com/Production/Neo4jOperation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        setResult('Person added: ' + JSON.stringify(responseData));
      } else {
        throw new Error('Failed to add person');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <div>
      <header>Opnli</header>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middle Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="text" value={opnliId} onChange={(e) => setOpnliId(e.target.value)} placeholder="Opnli ID" />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default PersonForm;

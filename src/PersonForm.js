import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PersonForm = () => {
  const [personName, setPersonName] = useState('');
  const [personAge, setPersonAge] = useState('');

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <input
          type="text"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          value={personAge}
          onChange={(e) => setPersonAge(e.target.value)}
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Return to Home</Link> {/* Link to return to Home */}
    </div>
  );
};

export default PersonForm;

import React, { useState } from 'react';

const PersonForm = () => {
  const [result, setResult] = useState('');

  const handleTestApi = async () => {
    // Replace with any required data for the POST request
    const testData = {
        "firstName": "John",
        "lastName": "Doe",
        "opnliId": "12345"
    };

    try {
      const response = await fetch('https://5xokx2kf59.execute-api.us-west-2.amazonaws.com/Production', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const responseData = await response.json();
      if (response.ok) {
        setResult('Success: ' + JSON.stringify(responseData));
      } else {
        setResult('Failure: ' + JSON.stringify(responseData));
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <div>
      <header>Opnli</header>
      {/* Button to test API connection */}
      <button onClick={handleTestApi}>Test API Connection</button>
      {/* Display the result or error from the POST request */}
      <p>{result}</p>
    </div>
  );
};

export default PersonForm;

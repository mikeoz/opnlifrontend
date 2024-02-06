import React, { useEffect, useState } from 'react';


const PersonForm = () => {
  const [result, setResult] = useState('');
  
  const [data,setData] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    opnliId:''  
  })

  const handleTestApi = async (e) => {
    // Replace with any required data for the POST request
    e.preventDefault();
    // if(data.firstName ==='' || data.lastName ==='' || data.opnliId === ''){
    //   setResult("Please fill all required fields in the form")
    // }
    // else{
      setResult('')
      console.log(JSON.stringify(data));
      setData({
        firstName:'',
        middleName:'',
        lastName:'',
        opnliId:''  
      })
      
      try {
        const response = await fetch('https://5xokx2kf59.execute-api.us-west-2.amazonaws.com/Production/Neo4jOperation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
  
        const responseData = await response.json();
        console.log(responseData);
        if (response) {
          setResult('Success: ' + JSON.stringify(responseData));
        } else {
          setResult('Failure: ' + JSON.stringify(responseData));
        }
      } catch (error) {
        setResult('Error: ' + error.message);
      }
    // }

  };

  return (
    <div>
      <header>Opnli</header>
      {/* Button to test API connection */}
      <form onSubmit={handleTestApi}>
        <div className='input-div' style={{margin:'1rem 0'}}>
          <label style={{marginRight:'1rem'}}>First Name*</label>
          <input type='text' value={data.firstName} onChange={e=>{setData({...data, firstName:e.target.value})}} required/>
        </div>
        <div className='input-div' style={{margin:'1rem 0'}}>
          <label style={{marginRight:'1rem'}}>Middle Name</label>
          <input type='text' value={data.middleName} onChange={e=>{setData({...data, middleName:e.target.value})}}/>
        </div>
        <div className='input-div' style={{margin:'1rem 0'}}>
          <label style={{marginRight:'1rem'}}>Last Name*</label>
          <input type='text' value={data.lastName} onChange={e=>{setData({...data, lastName:e.target.value})}} required/>
        </div>
        <div className='input-div' style={{margin:'1rem 0'}}>
          <label style={{marginRight:'1rem'}}>OpnliId*</label>
          <input type='text' value={data.opnliId} onChange={e=>{setData({...data, opnliId:e.target.value})}} required/>
        </div>
      <button type='submit'>Test API Connection</button>
      </form>
      {/* Display the result or error from the POST request */}
      <p>{result}</p>
    </div>
  );
};

export default PersonForm;

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
  
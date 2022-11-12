const buddyForm = async (event) => {
  event.preventDefault();

  // Collect email from the email modal
  //const name = document.getElementById('nameBuddy').value.trim();
  const email = document.getElementById('emailBuddy').value.trim();
 
  if (email) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/buddy', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, add the user's email to the page
      //document.location.replace('/buddy');
      
      document.getElementById('buddyEmail').textContent = email;
    } else {
      alert('Failed to add buddy');
    }
  }
  }

document
    .getElementById('buddyEmailForm')
    .addEventListener('submit', buddyForm);

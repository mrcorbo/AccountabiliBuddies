const friendForm = async (event) => {
  event.preventDefault();

  // Collect email from the email modal
  //const name = document.getElementById('namefriend').value.trim();
  const email = document.getElementById('emailFriend').value.trim();
 
  if (email) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/friends', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, add the user's email to the page
      console.log("friend added");
      document.location.replace("/friendpage");
      
      
      //document.getElementById('friendEmail').textContent = email;
    } else {
      alert('This user does not exist in the database.');
    }
    
  }
  
  }
  
document
    .getElementById('friendEmailForm')
    .addEventListener('submit', friendForm);

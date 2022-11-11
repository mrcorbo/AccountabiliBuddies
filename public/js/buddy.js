const buddyForm = async (event) => {
  event.preventDefault();

  // Collect email from the email modal
  const email = document.querySelector('#emailBuddy').value.trim();
 
  if (email) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, add the user's email to the page
      document.querySelector("#userBuddy").text(email);
    } else {
      alert(response.statusText);
    }
  }
};
document
    .querySelector('#buddyEmailForm')
    .addEventListener('submit', loginForm);

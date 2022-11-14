// Creates a new goal in the user's profile page
const newGoal = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#newGoal').value.trim();
    const frequency = document.querySelector('#frequency').value.trim();
    const duration = document.querySelector('#duration').value.trim();

  
    if (name && frequency && duration) {
      const response = await fetch(`/api/goals`, {
        method: 'POST',
        body: JSON.stringify({ name, frequency, duration }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create goal');
      }
    }
  };

  //Button - Delete Goal 

  const deleteBtn = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/goals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete goal');
      }
    }
  };

  document
  .querySelector('#new-goal-form')
  .addEventListener('submit', newGoal);

  document
  .querySelector('#goalCard')
  .addEventListener('click', deleteBtn);
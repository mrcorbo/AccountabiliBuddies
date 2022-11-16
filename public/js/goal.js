const editGoal= async (event) => {
    event.preventDefault();

    const name = document.getElementById('newGoal').value.trim();
    const frequency = document.getElementById('frequency').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const progress = document.getElementById('progress').value.trim();
    
    console.log(name);
    console.log(frequency);
    console.log(duration);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
 
    
      
      const response = await fetch(`/api/goals/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          goal_id: id,
          name,
          frequency,
          duration,
          progress
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('.edit-goal-form').addEventListener('submit', editGoal);
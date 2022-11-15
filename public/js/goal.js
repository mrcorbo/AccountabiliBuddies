const editGoal= async (event) => {
    event.preventDefault();

    const name = document.getElementById('newGoal').value.trim();
    const frequency = document.getElementById('frequency').value.trim();
    const duration = document.getElementById('duration').value.trim();
    //const progress = document.querySelector('input[name="content"]').value.trim();
    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/goals/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          name,
          frequency,
          duration
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.getElementById.replace('goalcard');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('.edit-goal-form').addEventListener('submit', editFormHandler);
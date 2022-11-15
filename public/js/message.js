// Creates a new message 
const newGoal = async (event) => {
    event.preventDefault();
  
    //const userEmail = document.querySelector('#emailMessage').value.trim();
    const message_title = document.querySelector('#messageTitle').value.trim();
    const message_content = document.querySelector('#messageContent').value.trim();

  
    if (message_title && message_content) {
      const response = await fetch(`/api/messages`, {
        method: 'POST',
        body: JSON.stringify({ message_title, message_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/messages');
      } else {
        alert('Failed to create goal');
      }
    }
  };

  const deleteBtn = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/messages");
      } else {
        alert("Failed to delete message");
      }
    }
  };
  


  document
  .querySelector('#new-message-form')
  .addEventListener('submit', newGoal);

  document
  .querySelector('#messageCard')
  .addEventListener('click', deleteBtn);
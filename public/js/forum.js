// Creates a new forum post 
const newPost = async (event) => {
    event.preventDefault();
  
    //const userEmail = document.querySelector('#emailMessage').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const body = document.querySelector('#body').value.trim();

  
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
  
      const response = await fetch(`/api/forums/${id}`, {
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
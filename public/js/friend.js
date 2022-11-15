const friendForm = async (event) => {
  event.preventDefault();

  // Collect email from the email modal
  //const name = document.getElementById('namefriend').value.trim();
  const name = document.getElementById("nameFriend").value.trim();
  const email = document.getElementById("emailFriend").value.trim();

  if (email) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/friends", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, add the user's email to the page
      console.log("friend added", response);

     const user = await response.json();
     console.log(user);
      //Get the goals from the user's buddy
      const res = await fetch(`/api/goals/${user.friend_id}`, { 
        method: "GET",
        headers: { "Content-Type": "application/json" },
        
      });
      
     console.log("goals added");
      if (res.ok){
      console.log("this is a ", res);
      const goalsArray = await res.json();
      console.log(goalsArray);
      //document.getElementById("goalFriendList").innerHTML = "";
      for (var i = 0; i < goalsArray.length; i++){
      var nameGoal =  goalsArray[i].name;
      console.log(nameGoal);
      var frequencyGoal = goalsArray[i].frequency;
      console.log(frequencyGoal);
      var durationGoal = goalsArray[i].duration;
      console.log(durationGoal);
      var progressGoal = goalsArray[i].progress;
         //var goalList = goalsArray[i];
        //var goalList = JSON.stringify(goalsArray[i]);
        //console.log(JSON.stringify(goalsArray));
       
       var liGoals = document.createElement("li");
             
       liGoals.innerHTML = ("<b>User: </b>" + name + ". <b> Goal: </b>" + nameGoal  +".<b> Frequency: </b>" + frequencyGoal +" time(s) a week, "  + " for " + durationGoal + " week(s).") + "<b>Progress:</b> " + progressGoal + "%";
       document.getElementById("goalFriendList").appendChild(liGoals);
       
      //document.location.replace("/friendpage");
      }
      }
    }
      
    } else {
      alert("This user does not exist in the database.");
    }
  };

  document
  .getElementById("friendEmailForm")
  .addEventListener("submit", friendForm);

  /*
const deleteBtn = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/friends/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/friendpage");
    } else {
      alert("Failed to delete friend");
    }
  }
};
*/



/*
document
  .getElementById("friendCard")
  .addEventListener("click", deleteBtn)
*/
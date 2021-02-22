/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeStr) {
  let parsed = parseInt(timeStr);
  if (parsed < 12) 
    return "Good Morning";
  else if (parsed < 17)
    return "Good Afternoon"; 
  else 
    return "Good Evening";
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

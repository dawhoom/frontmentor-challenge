function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("e-mail");
  const email = emailInput.value;

  const label = document.getElementById("labelEmail");
  let messageElement = label.querySelector(".error-message");

  if (validateEmail(email)) {
    alert("Email is valid. Submitting form...");
    // Add code here to submit the form or perform other actions
  } else {
    emailInput.classList.add("invalid-email");

    // Check if an error message already exists
    if (!messageElement) {
      messageElement = document.createElement("span");
      messageElement.style.color = "red";
      messageElement.style.textAlign = "right";
      messageElement.textContent = "You have to enter a valid e-mail";
      messageElement.classList.add("error-message");
      label.appendChild(messageElement);
    }
  }
}

function resetBorderColor() {
  const emailInput = document.getElementById("e-mail");
  emailInput.classList.remove("invalid-email");

  const label = document.getElementById("labelEmail");
  const messageElement = label.querySelector(".error-message");
  if (messageElement) {
    label.removeChild(messageElement); // Remove the error message when resetting the border color
  }
}

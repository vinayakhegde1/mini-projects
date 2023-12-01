document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        // If form is valid, you can proceed with form submission or other actions.
        alert("Form submitted successfully!");
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Reset error messages
      resetErrors();
  
      // Validation for Full Name
      const fullNameInput = document.getElementById("fullname");
      if (fullNameInput.value.trim() === "") {
        displayError("fullnameError", "Full Name is required");
        isValid = false;
      }
  
      // Validation for Username
      const usernameInput = document.getElementById("username");
      if (usernameInput.value.trim() === "") {
        displayError("usernameError", "Username is required");
        isValid = false;
      }
  
      // Validation for Email
      const emailInput = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        displayError("emailError", "Invalid Email address");
        isValid = false;
      }
  
      // Validation for Phone Number
      const phoneInput = document.getElementById("phonenum");
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneInput.value.trim())) {
        displayError("phonenumError", "Invalid Phone Number");
        isValid = false;
      }
  
      // Validation for Password
      const passwordInput = document.getElementById("password");
      if (passwordInput.value.length < 6) {
        displayError("passwordError", "Password should be at least 6 characters");
        isValid = false;
      }
  
      // Validation for Confirm Password
      const confirmPasswordInput = document.getElementById("confirmpassword");
      if (confirmPasswordInput.value !== passwordInput.value) {
        displayError("confirmpasswordError", "Passwords do not match");
        isValid = false;
      }
  
      return isValid;
    }
  
    function displayError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
    }
  
    function resetErrors() {
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach(function (element) {
        element.textContent = "";
      });
    }
  });
  
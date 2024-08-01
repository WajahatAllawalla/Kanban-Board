document.addEventListener('DOMContentLoaded', function() {
  // Show login form and hide signup form initially
  document.getElementById('loginFormContainer').classList.add('d-none');
  document.getElementById('signupFormContainer').classList.remove('d-none');

  // Handle click on "Already a user? Login here."
  document.getElementById('loginLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('signupFormContainer').classList.add('d-none');
      document.getElementById('loginFormContainer').classList.remove('d-none');
  });

  // Handle click on "Not registered? Sign Up here."
  document.getElementById('signupLink').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('loginFormContainer').classList.add('d-none');
      document.getElementById('signupFormContainer').classList.remove('d-none');
  });

  // Handle signup form submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();

      let username = document.getElementById('username').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      if (!username || !email || !password) {
          // Show error message
          document.getElementById('signupError').classList.remove('d-none');
          return;
      }

      // Save user data in local storage
      let user = {
          username: username,
          email: email,
          password: password
      };
      localStorage.setItem(username, JSON.stringify(user));

      // Clear fields
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';

      // Hide signup form and show login form
      document.getElementById('signupFormContainer').classList.add('d-none');
      document.getElementById('loginFormContainer').classList.remove('d-none');
  });

  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      let username = document.getElementById('loginUsername').value;
      let password = document.getElementById('loginPassword').value;

      let storedUser = localStorage.getItem(username);

      if (storedUser) {
          let user = JSON.parse(storedUser);
          if (user.password === password) {
              // Successful login
              window.location.href = 'index.html';
          } else {
              // Show error message for incorrect password
              document.getElementById('loginError').innerHTML = 'Invalid username or password. Please try again.';
              document.getElementById('loginError').classList.remove('d-none');
          }
      } else {
          // Show error message for non-existent username
          document.getElementById('loginError').innerHTML = 'Invalid username or password. Please try again.';
          document.getElementById('loginError').classList.remove('d-none');
      }
  });
});

const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  alert('Registration successful!');
});
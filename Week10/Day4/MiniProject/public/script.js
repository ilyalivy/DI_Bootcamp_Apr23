const forms = Array.from(document.querySelectorAll('form'));

  forms.forEach(form => {
    const formInputs = Array.from(form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]'));
    const submitButton = form.querySelector('input[type="submit"]');

    // Disable the button initially
    submitButton.disabled = true;

    formInputs.forEach(input => {
      input.addEventListener('input', () => {
        submitButton.disabled = !formInputs.every(input => input.value.trim() !== "");
      });
    });
  });


  document.getElementById("register_form").addEventListener("submit", function(event){
    event.preventDefault();
  
    let data = {
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
  
    fetch('/register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        let message = data.message;
        if (data.id) { // If id exists, registration was successful
        message = `OK Hello ${data.first_name} ${data.last_name}. Your ID is ${data.id}`;
        }

        document.getElementById('register_message').innerText = message;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  })
  
  document.getElementById("login_form").addEventListener("submit", function(event){
    event.preventDefault();
  
    let data = {
      username: document.getElementById('login_username').value,
      password: document.getElementById('login_password').value
    }
  
    fetch('/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        let message = data.message;
        if (data.username) { // If username exists, login was successful
          message = `OK Hello, your username is ${data.username}`;
        }
    
        document.getElementById('login_message').innerText = message;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  })
  
//FOR SIGNING UP
async function signupFormHandler(event) {
    event.preventDefault();
  
    //grab the typed username, email, and password
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
      //Once signed up, go ahead and log the user in and empty out the values.
      document.querySelector('#username-signup').value = "";
      document.querySelector('#email-signup').value = "";
      document.querySelector('#password-signup').value = "";
      const response2 = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response2.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response2.statusText);
      }

    }
}

//FOR LOGGING IN
async function loginFormHandler(event) {
    event.preventDefault();
  
    //get the typed username and password
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //submit username and password for logging in
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
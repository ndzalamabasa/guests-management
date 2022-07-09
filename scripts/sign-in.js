const signInForm = document.getElementById('sign-in-form');
const errors = document.querySelectorAll('.error');

let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let userError = document.getElementById('err_message');

document.getElementById('sign-in').onclick = function (e) {
  e.preventDefault();
  const form_data = new FormData(signInForm);

  signIn(form_data);
};

let xhr;

function signIn(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);

        if (response.success !== '') {
          signInForm.reset();

          document.getElementById('message').innerText = `${response.success}`;
          document.querySelector('.success').style.display = 'block';
          setTimeout(function () {
            document.querySelector('.success').style.display = 'none';
          }, 3000);

          window.location.href = '../guests/';
        } else {
          if (response.email !== '') {
            emailError.innerText = `${response.email}`;
          }

          if (response.password !== '') {
            passwordError.innerText = `${response.password}`;
          }
          if (response.user !== '') {
            userError.innerText = `${response.user}`;
          }

          errors.forEach(error => {
            error.style.display = 'block';
            setTimeout(function () {
              error.style.display = 'none';
              emailError.innerText = '';
              passwordError.innerText = '';
              userError.innerText = '';
            }, 3000);
          });
        }
      } else {
        alert('there was a problem signing in, try again!');
      }
    }
  };
  xhr.open('POST', `/includes/sign-in.php`);
  xhr.send(formData);
}

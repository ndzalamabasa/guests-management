const signInForm = document.getElementById('sign-in-form');
const errors = document.querySelectorAll('.error');

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
          errors.forEach(error => {
            error.style.display = 'block';
            setTimeout(function () {
              error.style.display = 'none';
            }, 3000);
          });
          if (response.email !== '') {
            document.getElementById('email-error').innerText = `${response.email}`;
          }

          if (response.password !== '') {
            document.getElementById('password-error').innerText = `${response.password}`;
          }
          if (response.user !== '') {
            document.getElementById('err_message').innerText = `${response.user}`;
          }
        }
      } else {
        alert('there was a problem signing in, try again!');
      }
    }
  };
  xhr.open('POST', `/includes/sign-in.php`);
  xhr.send(formData);
}

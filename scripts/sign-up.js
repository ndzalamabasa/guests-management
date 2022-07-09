const signUpForm = document.getElementById('sign-up-form');
const errors = document.querySelectorAll('.error');

let fullnameError = document.getElementById('fullname-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let cpasswordError = document.getElementById('cpassword-error');
let userError = document.getElementById('err_message');



document.getElementById('sign-up').onclick = function (e) {
  e.preventDefault();
  const form_data = new FormData(signUpForm);

  signUp(form_data);
};

let xhr;

function signUp(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);

        console.log(response);
        if (response.success !== '') {
          signUpForm.reset();

          document.getElementById('message').innerText = `${response.success}`;
          document.querySelector('.success').style.display = 'block';
          setTimeout(function () {
            document.querySelector('.success').style.display = 'none';
          }, 3000);

          window.location.href = '/guests/';
        } else {
          if (response.fullname !== '') {
            fullnameError.innerText = `${response.fullname}`;
          }
          if (response.email !== '') {
            emailError.innerText = `${response.email}`;
          }

          if (response.password !== '') {
            passwordError.innerText = `${response.password}`;
          }
          if (response.cpassword !== '') {
            cpasswordError.innerText = `${response.cpassword}`;
          }
          if (response.user !== '') {
            userError.innerText = `${response.user}`;
          }

          errors.forEach(error => {
            error.style.display = 'block';
            setTimeout(function () {
              error.style.display = 'none';
              fullnameError.innerText = '';
              emailError.innerText = '';
              passwordError.innerText = '';
              cpasswordError.innerText = '';
              userError.innerText = '';

            }, 3000);
          });
        }
      } else {
        alert('there was a problem signing up, try again!');
      }
    }
  };
  xhr.open('POST', `/includes/sign-up.php`);
  xhr.send(formData);
}

const signUpForm = document.getElementById('sign-up-form');
const errors = document.querySelectorAll('.error');
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
          errors.forEach(error => {
            error.style.display = 'block';
            setTimeout(function () {
              error.style.display = 'none';
            }, 3000);
          });
          if (response.fullname !== '') {
            document.getElementById('fullname-error').innerText = `${response.fullname}`;
          }
          if (response.email !== '') {
            document.getElementById('email-error').innerText = `${response.email}`;
          }

          if (response.password !== '') {
            document.getElementById('password-error').innerText = `${response.password}`;
          }
          if (response.cpassword !== '') {
            document.getElementById('cpassword-error').innerText = `${response.cpassword}`;
          }
          if (response.user !== '') {
            document.getElementById('err_message').innerText = `${response.user}`;
          }
        }
      } else {
        alert('there was a problem signing up, try again!');
      }
    }
  };
  xhr.open('POST', `/includes/sign-up.php`);
  xhr.send(formData);
}

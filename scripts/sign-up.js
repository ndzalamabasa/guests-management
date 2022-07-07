const signUpForm = document.getElementById('sign-up-form');

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
        } else {
          if (response.password !== '') {
            document.getElementById('err_message').innerText = `${response.password}`;
          }
          document.querySelector('.error').style.display = 'block';
          setTimeout(function () {
            document.querySelector('.error').style.display = 'none';
          }, 3000);
        }
      } else {
        alert('there was a problem signing up, try again!');
      }
    }
  };
  xhr.open('POST', `/includes/sign-up.php`);
  xhr.send(formData);
}

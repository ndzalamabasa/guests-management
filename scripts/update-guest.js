// Get the lunch order form
let updateForm = document.getElementById('update_form');
let guest_id = document.getElementById('guest_id');
// Get a form submit button and add a click event listener
document.getElementById('update-guest').onclick = function (e) {
  // prevent form's default behaviour
  // console.log(guest_id.innerHTML);

  e.preventDefault();

  // set form fiels (name:value) to form_data variable
  let form_data = new FormData(updateForm);

  // call function for sending data to php script with form fields as an arg
  update(form_data);
};

let xhr;

function update(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        if (response.success !== '') {
          updateForm.reset();
          document.getElementById('message').innerText = `${response.success}`;
          document.querySelector('.success').style.display = 'block';
          setTimeout(function () {
            document.querySelector('.success').style.display = 'none';
          }, 3000);
        }
      } else {
        alert('there was a problem with adding a group, try again!');
      }
    }
  };
  xhr.open(
    'POST',
    `../includes/update-guest.php?g=${guest_id.innerHTML}`,
    true
  );
  xhr.send(formData);
}

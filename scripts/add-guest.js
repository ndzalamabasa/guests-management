// Get the lunch order form
let groupForm = document.getElementById('group_form');

// Get a form submit button and add a click event listener
document.getElementById('add_group').onclick = function (e) {
  // prevent form's default behaviour
  e.preventDefault();

  // set form fiels (name:value) to form_data variable
  let form_data = new FormData(groupForm);

  // call function for sending data to php script with form fields as an arg
  addGroup(form_data);
};

let xhr;

function addGroup(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);

        if (response.success !== '') {
          groupForm.reset();

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
  xhr.open('POST', `../includes/save_guest.php`);
  xhr.send(formData);
}

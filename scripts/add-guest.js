// Get the lunch order form
let guestForm = document.getElementById('guest-form');

// Get a form submit button and add a click event listener
document.getElementById('save-guest').onclick = function (e) {
  // prevent form's default behaviour
  e.preventDefault();

  // set form fiels (name:value) to form_data variable
  let form_data = new FormData(guestForm);

  // call function for sending data to php script with form fields as an arg
  saveGuest(form_data);
};

// initialize variable for XMLHttpRequest method
let xhr;

// Function for sending order to php script
function saveGuest(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Get response text from php script
        let response = JSON.parse(xhr.responseText);

        console.log(response);
        // If there are no errors,
        if (response.success !== '') {
          // reset form field to empty
          guestForm.reset();
        }
      }
      // if xhr fails, execute the statement below
      else {
        alert('there was a problem adding guest, try again!');
      }
    }
  };

  xhr.open('POST', `../includes/save_guest.php`);
  xhr.send(formData);
}

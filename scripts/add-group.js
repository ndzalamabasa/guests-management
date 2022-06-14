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
/*
  Notes:
    -create function e.g: show element, with parameters(id, state)
    -showElement('order-form', true) to change display styles

    -Another sep func to handle API calls, e.g on Ajax state change
    api(url, 'POST', { onSuccess: function() {} })
    -Fetch API
    -Promises
 */
// initialize variable for XMLHttpRequest method
let xhr;

// Function for sending order to php script
function addGroup(formData) {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 3) {
      // Show Sending order btn when order is being processed
      document.getElementById('add_group').style.display = 'none';
      // Hide place order btn when order is being processed
      document.getElementById('adding-group').style.display = 'block';
    }

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Get response text from php script
        let response = JSON.parse(xhr.responseText);

        console.log(response);
        // If there are no errors,
        if (response.success !== '') {
          // reset form field to empty
          coffee_form.reset();
          // Show success message
          document.getElementById('message').innerText = `${response.success}`;
          document.querySelector('.success').style.display = 'block';
          setTimeout(function () {
            // Hide success message after 3sec
            document.querySelector('.success').style.display = 'none';
          }, 3000);

          // Hide place order btn
          document.getElementById('add_group').style.display = 'none';
          // Hide sending order btn
          document.getElementById('adding-group').style.display = 'none';
          // Show go to my orders btn
          document.getElementById('adding-complete').style.display = 'block';
        } else {
          // Show place order btn
          document.getElementById('add_group').style.display = 'block';
          // hide sending order btn
          document.getElementById('adding-group').style.display = 'none';
        }
      }
      // if xhr fails, execute the statement below
      else {
        alert('there was a problem with adding a group, try again!');
      }
    }
  };
  xhr.open('POST', `../includes/save_guest.php`);
  xhr.send(formData);
}

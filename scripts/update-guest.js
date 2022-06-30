const updateGuest = document.querySelector('.update-guest');

const guest_ID = document.querySelector('.guest-id');
const updateName = document.getElementById('fullname');
const updateCountry = document.getElementById('country');
const updateArrival = document.getElementById('arrival');
const updateDeparture = document.getElementById('departure');
const updateAccomodation = document.getElementById('accomodation');
const updateTransportation = document.getElementById('transport');
const updateStatus = document.getElementById('status');
const updatePassport = document.querySelectorAll('[name="passport"]');
const updateCovid = document.querySelectorAll('[name="covid"]');
const updateMiscellaneous = document.getElementById('miscellaneous');
const updateAffiliation = document.getElementById('affiliation');
const updateCharted = document.querySelectorAll('[name="flight"]');
const updateCommercial = document.getElementById('commercial-flight');
const updateGroup = document.getElementById('group');
const updateInviter = document.getElementById('invited-by');

guestList.forEach((guest) => {
  guest.addEventListener('click', updateDetails);
});

function updateDetails(e) {
  if (e.target.classList.contains('fa-user-pen')) {
    const xhttp = new XMLHttpRequest();
    xhttp.open(
      'GET',
      '../includes/upt.php?g=' + e.target.nextElementSibling.innerHTML,
      true
    );
    xhttp.send();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);

        data.forEach(function (item) {
          for (let property in item) {
            if (item[property] == null) {
              item[property] = '';
            }
          }

          guest_ID.innerHTML = item.guestID;
          updateName.value = item.fullname;
          updateCountry.value = item.countryID;
          updateCharted.forEach(function (flight) {
            if (flight.value.toUpperCase() == item.chartedFlight.toUpperCase()) {
              flight.checked = true;
            } else {
              flight.checked = false;
            }
          });
          updateArrival.value = item.arrivalDate;
          updateDeparture.value = item.departureDate;
          updateAccomodation.value = item.accomodation;
          updateTransportation.value = item.transport;
          updateStatus.value = item.status;
          updatePassport.forEach((passport) => {
            if (
              passport.value.toUpperCase() ==
              item.passport.toUpperCase()
            ) {
              passport.checked = true;
            } else {
              passport.checked = false;
            }
          });
          updateCovid.forEach((covidstatus) => {
            if (
              covidstatus.value.toUpperCase() == item.covid.toUpperCase()
            ) {
              covidstatus.checked = true;
            } else {
              covidstatus.checked = false;
            }
          });
          updateMiscellaneous.value = item.miscellaneous;
          updateAffiliation.value = item.affiliation;
          updateCommercial.value = item.flightID;
          updateGroup.value = item.groupID;
          updateInviter.value = item.inviterID;
        });
      }
    };

    toggleForm();
  }
}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function toggleForm() {
  if (updateGuest.classList.contains('hide-form')) {
    document.querySelector('body').classList.add('no-scroll');
    updateGuest.classList.remove('hide-form');
    updateGuest.classList.add('show-form');
  } else {
    document.querySelector('body').classList.remove('no-scroll');
    updateGuest.classList.remove('show-form');
    updateGuest.classList.add('hide-form');
  }
}

// Get the lunch order form
let updateForm = document.getElementById('update_form');
let guest_id = document.getElementById('guest_id');

let closeForm = document.querySelector('.close-form');

closeForm.addEventListener('click', toggleForm);

// Get a form submit button and add a click event listener
document.getElementById('update-guest').onclick = function (e) {
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
            toggleForm();
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

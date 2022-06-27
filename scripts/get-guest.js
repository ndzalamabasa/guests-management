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
  guest.addEventListener('click', updateDetails, false);
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

        data.forEach(function (item) {
          for (let property in item) {
            if (item[property] != null && item[property].length <= 3) {
              item[property] = item[property].toUpperCase();
            }

            if (item[property] == null) {
              item[property] = '';
            }
          }

          guest_ID.innerHTML = item.guestID;
          updateName.value = item.fullname;
          updateCountry.value = item.countryID;
          updateArrival.value = item.arrivalDate;
          updateDeparture.value = item.departureDate;
          updateAccomodation.value = item.accomodation;
          updateTransportation.value = item.transport;
          updateStatus.value = item.status;
          updatePassport.forEach((passport) => {
            if (passport.value.toUpperCase() == item.passport.toUpperCase()) {
              passport.checked = true;
            }
          });
          updateCovid.forEach((covid) => {
            if (covid.value.toUpperCase() == item.covid.toUpperCase()) {
              covid.checked = true;
            }
          });
          updateMiscellaneous.value = item.miscellaneous;
          updateAffiliation.value = item.affiliation;

          updateCharted.forEach(function (flight) {
            if (
              flight.value.toUpperCase() == item.chartedFlight.toUpperCase()
            ) {
              flight.checked = true;
            }
          });
          updateCommercial.value = item.flightID;
          updateGroup.value = item.groupID;
          updateInviter.value = item.inviterID;
        });
      }
    };
  }
}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

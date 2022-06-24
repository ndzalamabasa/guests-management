let results = document.querySelector('.guest-list');
let data;

const applyFilter = document.querySelector('.apply-filter');
const countryFilter = document.querySelector('#country-filter');
const statusFilter = document.querySelector('#status-filter');
const commercialFilter = document.querySelector('#commercial-filter');
const cancel = document.querySelector('.cancel');

cancel.addEventListener('click', closeFilter);

applyFilter.addEventListener('click', filterData);
window.addEventListener('load', showData);

const toogleFilter = document.querySelector('#toggle-filter');

const filter = document.querySelector('.filter');

toogleFilter.addEventListener('click', closeFilter);

function showData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', '../includes/get-data.php', true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);

      results.innerHTML = '';

      data.forEach(function (item) {
        for (let property in item) {
          if (item[property] != null && item[property].length <= 3) {
            item[property] = item[property].toUpperCase();
          }

          if (item[property] == null) {
            item[property] = '';
          }
        }

        // Guest data
        let row = results.appendChild(document.createElement('div'));
        row.classList.add('guest', 'guest-info-hidden');

        // Guest Header
        let header = row.appendChild(document.createElement('div'));
        header.classList.add('flex-row', 'guest-header');

        // Guest Name
        let name = header.appendChild(document.createElement('h2'));
        name.classList.add('guest-name');
        name.innerHTML = item.fullname;

        let expand = header.appendChild(document.createElement('i'));
        expand.classList.add('fa-solid', 'fa-circle-chevron-down', 'fa-xl');

        // Guest Info
        let guestInfo = row.appendChild(document.createElement('div'));
        guestInfo.classList.add('guest-info');

        let country = guestInfo.appendChild(document.createElement('p'));
        country.classList.add('country');
        country.appendChild(document.createTextNode('Country: '));
        country.appendChild(document.createElement('strong')).innerHTML =
          item.countryName;

        let chartedFlight = guestInfo.appendChild(document.createElement('p'));
        chartedFlight.classList.add('charted-flight');
        chartedFlight.appendChild(document.createTextNode('Charted Flight: '));
        chartedFlight.appendChild(document.createElement('strong')).innerHTML =
          item.chartedFlight;

        let commercialFlight = guestInfo.appendChild(
          document.createElement('p')
        );
        commercialFlight.classList.add('commercial-flight');
        commercialFlight.appendChild(
          document.createTextNode('Commercial Flight: ')
        );
        commercialFlight.appendChild(
          document.createElement('strong')
        ).innerHTML = item.commercialFlight;

        let arrival = guestInfo.appendChild(document.createElement('p'));
        arrival.classList.add('arrival');
        arrival.appendChild(document.createTextNode('Arrival Date: '));
        arrival.appendChild(document.createElement('strong')).innerHTML =
          item.arrivalDate;

        let departure = guestInfo.appendChild(document.createElement('p'));
        departure.classList.add('departure');
        departure.appendChild(document.createTextNode('Departure Date: '));
        departure.appendChild(document.createElement('strong')).innerHTML =
          item.departureDate;

        let accomodation = guestInfo.appendChild(document.createElement('p'));
        accomodation.classList.add('accomodation');
        accomodation.appendChild(document.createTextNode('Accomodation: '));
        accomodation.appendChild(document.createElement('strong')).innerHTML =
          item.accomodation;

        let transport = guestInfo.appendChild(document.createElement('p'));
        transport.classList.add('transport');
        transport.appendChild(document.createTextNode('Transport: '));
        transport.appendChild(document.createElement('strong')).innerHTML =
          item.transport;

        let status = guestInfo.appendChild(document.createElement('p'));
        status.classList.add('status');
        status.appendChild(document.createTextNode('Status: '));
        status.appendChild(document.createElement('strong')).innerHTML =
          item.status;

        let passport = guestInfo.appendChild(document.createElement('p'));
        passport.classList.add('passport');
        passport.appendChild(document.createTextNode('Passport: '));
        passport.appendChild(document.createElement('strong')).innerHTML =
          item.passport;

        let covidTest = guestInfo.appendChild(document.createElement('p'));
        covidTest.classList.add('covid-test');
        covidTest.appendChild(
          document.createTextNode('Covid Test/Vaccination: ')
        );
        covidTest.appendChild(document.createElement('strong')).innerHTML =
          item.covid;

        let miscellaneous = guestInfo.appendChild(document.createElement('p'));
        miscellaneous.classList.add('miscellaneous');
        miscellaneous.appendChild(document.createTextNode('Miscellaneous: '));
        miscellaneous.appendChild(document.createElement('strong')).innerHTML =
          item.miscellaneous;

        let affiliation = guestInfo.appendChild(document.createElement('p'));
        affiliation.classList.add('affiliation');
        affiliation.appendChild(document.createTextNode('Affiliation: '));
        affiliation.appendChild(document.createElement('strong')).innerHTML =
          item.affiliation;
      });
    }
  };
}

function filterData() {
  let rows = results.querySelectorAll('.guest');

  rows.forEach((row) => {
    let country = row.querySelector('.country').innerHTML;
    let status = row.querySelector('.status').innerHTML;
    let commercial = row.querySelector('.commercial-flight').innerHTML;

    if (
      (countryFilter.value === 'all' ||
        country.includes(countryFilter.value)) &&
      (statusFilter.value === 'all' || status.includes(statusFilter.value)) &&
      (commercialFilter.value === 'all' ||
        commercial.includes(commercialFilter.value))
    ) {
      row.style.display = 'block';
    } else {
      row.style.display = 'none';
    }
  });

  closeFilter();
}

function closeFilter() {
  if (filter.classList.contains('filter-hidden')) {
    document.querySelector('body').classList.add('no-scroll');
    filter.classList.remove('filter-hidden');
    filter.classList.add('filter-show');
  } else {
    document.querySelector('body').classList.remove('no-scroll');
    filter.classList.remove('filter-show');
    filter.classList.add('filter-hidden');
  }
}
let search = document.querySelector('#search');

search.addEventListener('keyup', (e) => {
  let rows = results.querySelectorAll('.guest');

  rows.forEach((row) => {
    let name = row.querySelector('.guest-name').innerHTML;

    if (name.toLowerCase().includes(e.target.value.toLowerCase())) {
      row.style.display = 'block';
    } else {
      row.style.display = 'none';
    }
  });
});

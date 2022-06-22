let results = document.querySelector('.guest-list');
let data;

const applyFilter = document.querySelector('#apply-filter');
const countryFilter = document.querySelector('#country-filter');
const statusFilter = document.querySelector('#status-filter');
const commercialFilter = document.querySelector('#commercial-filter');

applyFilter.addEventListener('click', filterData);
window.addEventListener('load', showData);

const toogleFilter = document.querySelector('#toggle-filter');

const filter = document.querySelector('.filter');

toogleFilter.addEventListener('click', () => {
  if (filter.classList.contains('filter-hidden')) {
    filter.classList.remove('filter-hidden');
    filter.classList.add('filter-show');
  } else {
    filter.classList.remove('filter-show');
    filter.classList.add('filter-hidden');
  }
});

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

        let countryContainer = header.appendChild(document.createElement('p'));
        // country.classList.add('guest-country');
        let countryDivider = countryContainer.appendChild(
          document.createElement('span')
        );
        countryDivider.innerHTML = '<i class="fa-solid fa-circle fa-2xs"></i>';

        let country = countryContainer.appendChild(
          document.createElement('span')
        );
        country.classList.add('country');
        country.innerHTML = item.countryName;

        let expand = header.appendChild(document.createElement('i'));
        expand.classList.add('fa-solid', 'fa-circle-chevron-down', 'fa-lg');

        // Guest Info
        let guestInfo = row.appendChild(document.createElement('div'));
        guestInfo.classList.add('guest-info');

        let introInfo = guestInfo.appendChild(document.createElement('div'));
        introInfo.classList.add('intro-info');

        let statusFlight = introInfo.appendChild(document.createElement('div'));
        statusFlight.classList.add('status-flight', 'flex-row');

        let status = statusFlight.appendChild(document.createElement('p'));
        status.classList.add('status');
        status.appendChild(document.createTextNode('Status: '));
        status.appendChild(document.createElement('strong')).innerHTML =
          item.status;

        let flight = statusFlight.appendChild(document.createElement('p'));
        flight.classList.add('flight');
        flight.appendChild(document.createTextNode('Charted Flight: '));
        flight.appendChild(document.createElement('strong')).innerHTML =
          item.chartedFlight;

        let dates = introInfo.appendChild(document.createElement('div'));
        dates.classList.add('dates', 'flex-row');

        let arrival = dates.appendChild(document.createElement('p'));
        arrival.classList.add('arrival');
        arrival.appendChild(document.createTextNode('Arrival: '));
        arrival.appendChild(document.createElement('strong')).innerHTML =
          item.arrivalDate;

        let departure = dates.appendChild(document.createElement('p'));
        departure.classList.add('departure');
        departure.appendChild(document.createTextNode('Departure: '));
        departure.appendChild(document.createElement('strong')).innerHTML =
          item.departureDate;

        let affilation = guestInfo.appendChild(document.createElement('p'));
        affilation.classList.add('affilation');
        affilation.classList.add('text-center', 'affffiliation');
        affilation.appendChild(document.createElement('strong')).innerHTML =
          item.affiliation;

        let moreInfo = guestInfo.appendChild(document.createElement('div'));
        moreInfo.classList.add('more-info');

        let commercialFlight = moreInfo.appendChild(
          document.createElement('p')
        );
        commercialFlight.classList.add('commercial-flight');
        commercialFlight.appendChild(
          document.createTextNode('Commercial Flight: ')
        );
        commercialFlight.appendChild(
          document.createElement('strong')
        ).innerHTML = item.commercialFlight;

        let accomodation = moreInfo.appendChild(document.createElement('p'));
        accomodation.classList.add('accomodation');
        accomodation.appendChild(document.createTextNode('Accomodation: '));
        accomodation.appendChild(document.createElement('strong')).innerHTML =
          item.accomodation;

        let transport = moreInfo.appendChild(document.createElement('p'));
        transport.classList.add('transport');
        transport.appendChild(document.createTextNode('Transport: '));
        transport.appendChild(document.createElement('strong')).innerHTML =
          item.transport;

        let passport = moreInfo.appendChild(document.createElement('p'));
        passport.classList.add('passport');
        passport.appendChild(document.createTextNode('Passport: '));
        passport.appendChild(document.createElement('strong')).innerHTML =
          item.passport;

        let covidTest = moreInfo.appendChild(document.createElement('p'));
        covidTest.classList.add('covid-test');
        covidTest.appendChild(
          document.createTextNode('Covid Test/Vaccination: ')
        );
        covidTest.appendChild(document.createElement('strong')).innerHTML =
          item.covid;

        let miscellaneous = moreInfo.appendChild(document.createElement('p'));
        miscellaneous.classList.add('miscellaneous');
        miscellaneous.appendChild(document.createTextNode('Miscellaneous: '));
        miscellaneous.appendChild(document.createElement('strong')).innerHTML =
          item.miscellaneous;
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

  if (filter.classList.contains('filter-hidden')) {
    filter.classList.remove('filter-hidden');
    filter.classList.add('filter-show');
  } else {
    filter.classList.remove('filter-show');
    filter.classList.add('filter-hidden');
  }
}

let results = document.querySelector('.guest-list');
let data;

// Filters
const countryFilter = document.querySelector('#country-filter');
const statusFilter = document.querySelector('#status-filter');
const commercialFilter = document.querySelector('#commercial-filter');
const groupFilter = document.querySelector('#group-filter');
const transportFilter = document.querySelector('#transport-filter');
const accomodationFilter = document.querySelector('#accomodation-filter');

const toogleFilter = document.querySelector('#toggle-filter');
const filter = document.querySelector('.filter');
const applyFilter = document.querySelector('.apply-filter');
const cancel = document.querySelector('.cancel');

// Sort
// const sort = document.querySelector('.sort');
// const toogleSort = document.querySelector('#toggle-sort');

// let applySort = document.querySelector('.apply-sort');

// applySort.addEventListener('click', sortData);

cancel.addEventListener('click', openCloseFilter);

applyFilter.addEventListener('click', filterData);
window.addEventListener('load', showData);

toogleFilter.addEventListener('click', openCloseFilter);
// toogleSort.addEventListener('click', openCloseSort);

function showData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', '../includes/get-data.php', true);
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
            item[property] = '--';
          }
        }

        // Guest data
        let row = results.appendChild(document.createElement('div'));
        row.classList.add('guest', 'guest-info-hidden', 'scroller');

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

        let chartedFlight = guestInfo.appendChild(document.createElement('p'));
        chartedFlight.classList.add('charted-flight');
        chartedFlight
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Charted Flight: '));
        chartedFlight.appendChild(document.createElement('strong')).innerHTML =
          item.chartedFlight;

        let commercialFlight = guestInfo.appendChild(
          document.createElement('p')
        );
        commercialFlight.classList.add('commercial-flight');
        commercialFlight
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Commercial Flight: '));
        commercialFlight.appendChild(
          document.createElement('strong')
        ).innerHTML = item.commercialFlight;

        let country = guestInfo.appendChild(document.createElement('p'));
        country.classList.add('country');
        country
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Country: '));
        country.appendChild(document.createElement('strong')).innerHTML =
          item.countryName;

        let arrival = guestInfo.appendChild(document.createElement('p'));
        arrival.classList.add('arrival');
        arrival
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Arrival Date: '));
        arrival.appendChild(document.createElement('strong')).innerHTML =
          item.arrivalDate;

        let departure = guestInfo.appendChild(document.createElement('p'));
        departure.classList.add('departure');
        departure
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Departure Date: '));
        departure.appendChild(document.createElement('strong')).innerHTML =
          item.departureDate;

        let accomodation = guestInfo.appendChild(document.createElement('p'));
        accomodation.classList.add('accomodation');
        accomodation
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Accomodation: '));
        accomodation.appendChild(document.createElement('strong')).innerHTML =
          item.accomodation;

        let transport = guestInfo.appendChild(document.createElement('p'));
        transport.classList.add('transport');
        transport
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Transport: '));
        transport.appendChild(document.createElement('strong')).innerHTML =
          item.transport;

        let status = guestInfo.appendChild(document.createElement('p'));
        status.classList.add('status');
        status
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Status: '));
        status.appendChild(document.createElement('strong')).innerHTML =
          item.status;

        let passport = guestInfo.appendChild(document.createElement('p'));
        passport.classList.add('passport');
        passport
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Passport: '));
        passport.appendChild(document.createElement('strong')).innerHTML =
          item.passport;

        let covidTest = guestInfo.appendChild(document.createElement('p'));
        covidTest.classList.add('covid-test');
        covidTest
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Covid Test: '));
        covidTest.appendChild(document.createElement('strong')).innerHTML =
          item.covid;

        let miscellaneous = guestInfo.appendChild(document.createElement('p'));
        miscellaneous.classList.add('miscellaneous');
        miscellaneous
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Miscellaneous: '));
        miscellaneous.appendChild(document.createElement('strong')).innerHTML =
          item.miscellaneous;

        let affiliation = guestInfo.appendChild(document.createElement('p'));
        affiliation.classList.add('affiliation');
        affiliation
          .appendChild(document.createElement('span'))
          .appendChild(document.createTextNode('Affiliation: '));
        affiliation.appendChild(document.createElement('strong')).innerHTML =
          item.affiliation;

        let group = guestInfo.appendChild(document.createElement('p'));
        group.classList.add('group', 'hide-field');
        group.innerHTML = item.groupName;

        let updateDetails = guestInfo.appendChild(document.createElement('p'));

        updateDetails.classList.add('update-details');
        let edit = updateDetails.appendChild(document.createElement('i'));
        edit.classList.add('fa-solid', 'fa-user-pen', 'fa-xl');

        let guestID = updateDetails.appendChild(document.createElement('p'));
        guestID.classList.add('guest-id', 'hide-field');
        guestID.innerHTML = item.guestID;
      });

      let scrollers = document.querySelectorAll('.scroller');
      let scrollerDivs = Array.prototype.filter.call(
        scrollers,
        function (testElement) {
          return testElement.nodeName === 'DIV';
        }
      );

      function scrollAll(scrollLeft) {
        scrollerDivs.forEach(function (element) {
          element.scrollLeft = scrollLeft;
        });
      }

      scrollerDivs.forEach(function (element) {
        element.addEventListener('scroll', function (e) {
          scrollAll(e.target.scrollLeft);
        });
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
    let group = row.querySelector('.group').innerHTML;
    let transport = row.querySelector('.transport').innerHTML;
    let accomodation = row.querySelector('.accomodation').innerHTML;

    if (
      (countryFilter.value === 'all' ||
        country.includes(countryFilter.value)) &&
      (statusFilter.value === 'all' || status.includes(statusFilter.value)) &&
      (commercialFilter.value === 'all' ||
        commercial.includes(commercialFilter.value)) &&
      (groupFilter.value === 'all' || group.includes(groupFilter.value)) &&
      (transportFilter.value === 'all' ||
        transport.includes(transportFilter.value)) &&
      (accomodationFilter.value === 'all' ||
        accomodation.includes(accomodationFilter.value))
    ) {
      row.style.display = 'grid';
    } else {
      row.style.display = 'none';
    }
  });

  openCloseFilter();
}

// const sort_by = (field, reverse, primer) => {
//   const key = primer
//     ? function (x) {
//         return primer(x[field]);
//       }
//     : function (x) {
//         return x[field];
//       };

//   reverse = !reverse ? 1 : -1;

//   return function (a, b) {
//     return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
//   };
// };

// function sortData() {
//   let rows = results.querySelectorAll('.guest');

//   rows.forEach((row) => {
//     let country = row.querySelector('.country').innerHTML;

//     row.sort(sort_by(country, false));
//   });
// }

function openCloseFilter() {
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

// function openCloseSort() {
//   if (sort.classList.contains('sort-hidden')) {
//     document.querySelector('body').classList.add('no-scroll');
//     sort.classList.remove('sort-hidden');
//     sort.classList.add('sort-show');
//   } else {
//     document.querySelector('body').classList.remove('no-scroll');
//     sort.classList.remove('sort-show');
//     sort.classList.add('sort-hidden');
//   }
// }

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

// let interval = setInterval(() => {

// }, 2000);

let results = document.querySelector('.container');

window.addEventListener('load', showData);

function showData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', '../includes/get-data.php', true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);

      let html = '';

      data.forEach(function (item) {
        for (let property in item) {
          if (item[property] != null && item[property].length <= 3) {
            item[property] = item[property].toUpperCase();
          }
          if (item[property] == null) {
            item[property] = '';
          }
        }

        html += `<div class="guest guest-info-hidden">
        <header class="flex-row guest-header">
          <h2>${item.fullname}</h2>
          <p>
            <span><i class="fa-solid fa-circle fa-2xs"></i></span>
            <span class="country">${item.countryName}</span>
          </p>
          <i class="fa-solid fa-circle-chevron-down fa-lg"></i>
        </header>
        <div class="guest-info">
          <div class="intro-info">
            <div class="status-flight flex-row">
              <p>Status: <strong>${item.status}</strong></p>
              <p>Charted Flight: <strong>${item.chartedFlight}</strong></p>
            </div>
            <div class="dates flex-row">
              <p>Arrival: <strong>${item.arrivalDate}</strong></p>
              <p>Departure: <strong>${item.departureDate}</strong></p>
            </div>
            <p class="text-center affiliation">Affiliation: <strong>${item.affiliation}</strong></p>
          </div>
          <div class="more-info">
            <p>Commercial Flight: <strong>${item.commercialFlight}</strong></p>
            <p>Accomodation: <strong>${item.accomodation}</strong></p>
            <p>Transport: <strong>${item.transport}</strong></p>
            <p>Passport: <strong>${item.passport}</strong></p>
            <p>Covid Test/Vaccination: <strong>${item.covid}</strong></p>
            <p>Miscellaneous: <strong>${item.miscellaneous}</strong></p>
          </div>
        </div>
      </div>`;
      });

      results.innerHTML = html;
    }
  };
}

const applyFilter = document.querySelector('#apply-filter');
const countries = document.querySelectorAll('.country');
const countryFilter = document.querySelector('#country-filter');

applyFilter.addEventListener('click', filterResults);

function filterResults() {
  // e.preventDefault();

  countries.forEach((country) => {
    if (countryFilter.value === 'all') {
      country.parentElement.parentElement.parentElement.style.display = 'block';
    } else if (!country.innerHTML.includes(countryFilter.value)) {
      country.parentElement.parentElement.parentElement.style.display = 'none';
    } else {
      country.parentElement.parentElement.parentElement.style.display = 'block';
    }
  });
}

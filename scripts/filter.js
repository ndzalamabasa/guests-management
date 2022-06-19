const applyFilter = document.querySelector('#apply-sort');
const countries = document.querySelectorAll('.country');
const sort = document.querySelector('#sort');

applyFilter.addEventListener('click', sortResults);

function sortResults() {
  // e.preventDefault();

  countries.forEach((country) => {
    if (sort.value === 'all') {
      country.parentElement.parentElement.parentElement.style.display = 'block';
    } else if (!country.innerHTML.includes(sort.value)) {
      country.parentElement.parentElement.parentElement.style.display = 'none';
    } else {
      country.parentElement.parentElement.parentElement.style.display = 'block';
    }
  });
}

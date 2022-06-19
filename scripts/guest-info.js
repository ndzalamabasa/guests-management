const guestHeader = document.querySelectorAll('.guest-header');

guestHeader.forEach((header) => {
  header.addEventListener('click', showDetails, false);
});

function showDetails(e) {
  // let guestDetails = document.querySelector('.guest-info');

  if (e.target.classList.contains('fa-circle-chevron-down')) {
    e.target.classList.replace(
      'fa-circle-chevron-down',
      'fa-circle-chevron-up'
    );
    e.target.parentElement.parentElement.classList.replace(
      'guest-info-hidden',
      'guest-info-show'
    );
  } else if (e.target.classList.contains('fa-circle-chevron-up')) {
    e.target.classList.replace(
      'fa-circle-chevron-up',
      'fa-circle-chevron-down'
    );
    e.target.parentElement.parentElement.classList.replace(
      'guest-info-show',
      'guest-info-hidden'
    );
  }
}

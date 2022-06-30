let guestList = document.querySelectorAll('.guest-list');

guestList.forEach((guest) => {
  guest.addEventListener('click', showDetails);
});

function showDetails(e) {
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

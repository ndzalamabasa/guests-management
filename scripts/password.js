const conditions = document.querySelectorAll(".condition");
const password = document.querySelector("#password");
const statusIcon = document.querySelectorAll(".fa-solid");

password.addEventListener("keyup", function () {
  if (password.value.length >= 8) {
    conditions[0].classList.add("condition-passed");
    statusIcon[0].classList.replace("fa-circle-xmark", "fa-circle-check");
  } else {
    conditions[0].classList.remove("condition-passed");
    statusIcon[0].classList.replace("fa-circle-check", "fa-circle-xmark");
  }

  if (/[A-Z]/.test(password.value)) {
    conditions[1].classList.add("condition-passed");
    statusIcon[1].classList.replace("fa-circle-xmark", "fa-circle-check");
  } else {
    conditions[1].classList.remove("condition-passed");
    statusIcon[1].classList.replace("fa-circle-check", "fa-circle-xmark");
  }

  if (/[a-z]/.test(password.value)) {
    conditions[2].classList.add("condition-passed");
    statusIcon[2].classList.replace("fa-circle-xmark", "fa-circle-check");
  } else {
    conditions[2].classList.remove("condition-passed");
    statusIcon[2].classList.replace("fa-circle-check", "fa-circle-xmark");
  }

  if (/[0-9]/.test(password.value)) {
    conditions[3].classList.add("condition-passed");
    statusIcon[3].classList.replace("fa-circle-xmark", "fa-circle-check");
  } else {
    conditions[3].classList.remove("condition-passed");
    statusIcon[3].classList.replace("fa-circle-check", "fa-circle-xmark");
  }

  if (/[!@#$%^&*]/.test(password.value)) {
    conditions[4].classList.add("condition-passed");
    statusIcon[4].classList.replace("fa-circle-xmark", "fa-circle-check");
  } else {
    conditions[4].classList.remove("condition-passed");
    statusIcon[4].classList.replace("fa-circle-check", "fa-circle-xmark");
  }
});

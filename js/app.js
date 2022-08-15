const cardholderPayment = document.querySelector(".cardholder-payment");
const completedPopup = document.querySelector(".completed-popup");
const confirmButton = document.querySelector(".confirm-button");
const continueButton = document.querySelector(".continue-button");
const cardUserName = document.getElementById("carduser-name");
const cardNumber = document.querySelector(".card-number");
const incorrect = document.querySelectorAll(".incorrect");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvcInput = document.querySelector(".cvc-input");
const inputError = document.querySelectorAll("input");
const cardNameDisplay = document.querySelector(".card-name-display");
const cardNumberDisplay = document.querySelector(".card-number-display");
const cardmonthDisplay = document.querySelector(".card-month-display");
const cardyearDisplay = document.querySelector(".card-year-display");
const cardCvcDisplay = document.querySelector(".card-cvc-display");
const doubleNameRegex =
  /^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;
const monthInputRegex = /^(0?[1-9]|1[012])$/;
const yearInputRegex = /(?:(?:19|20)[0-9]{2})/;

cardUserName.addEventListener("input", () => {
  if (!cardUserName.value.match(doubleNameRegex)) {
    incorrect[0].classList.add("active");
    inputError[0].classList.add("active");
    incorrect[0].innerHTML = "Please put in a Firstname and a Lastname 😁";
  } else {
    incorrect[0].classList.remove("active");
    inputError[0].classList.remove("active");
  }
});

// makes sure that the user only inputs numbers and not alphabets
cardNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
monthInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
yearInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
cvcInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

confirmButton.addEventListener("click", () => {
  if (cardUserName.value == "") {
    inputError[0].classList.add("active");
    incorrect[0].classList.add("active");
    incorrect[0].innerHTML = "Please put in a Firstname and a Lastname 😁";
  }
  if (cardNumber.value.length <= 16) {
    incorrect[1].classList.add("active");
    inputError[1].classList.add("active");
    incorrect[1].innerHTML = "Your card number should be 16";
  } else {
    incorrect[1].classList.remove("active");
    inputError[1].classList.remove("active");
  }
  if (cardNumber.value == "") {
    inputError[1].classList.add("active");
    incorrect[1].innerHTML = "Please put in a YOUR card number";
  } else {
  }
  if (!monthInput.value.match(monthInputRegex)) {
    incorrect[2].classList.add("active");
    incorrect[2].innerHTML = "Please put in a valid date";
  } else {
    incorrect[2].classList.remove("active");
  }
  if (monthInput.value == "") {
    incorrect[2].innerHTML = "Can't be empty";
    inputError[2].classList.add("active");
  } else {
    inputError[2].classList.remove("active");
  }
  if (yearInput.value == "") {
    incorrect[2].innerHTML = "Can't be empty";
    inputError[3].classList.add("active");
  } else {
    inputError[3].classList.remove("active");
  }
  if (cvcInput.value == "") {
    incorrect[3].classList.add("active");
    inputError[4].classList.add("active");
    incorrect[3].innerHTML = "Can't be empty";
  } else {
    incorrect[3].classList.remove("active");
    inputError[4].classList.remove("active");
  }
  if (
    cardUserName.value !== "" &&
    cardNumber.value.length >= 16 &&
    cardNumber.value !== "" &&
    monthInput.value.match(monthInputRegex) &&
    monthInput.value !== "" &&
    yearInput.value !== "" &&
    cvcInput.value !== "" &&
    cardUserName.value.match(doubleNameRegex)
  ) {
    cardNameDisplay.innerHTML = cardUserName.value;
    cardNumberDisplay.innerHTML = cardNumber.value;
    cardmonthDisplay.innerHTML = monthInput.value;
    cardyearDisplay.innerHTML = yearInput.value;
    cardCvcDisplay.innerHTML = cvcInput.value;
    cardholderPayment.style.display = "none";
    completedPopup.style.display = "flex";
  }
});
continueButton.addEventListener("click", () => {
  location.reload();
});


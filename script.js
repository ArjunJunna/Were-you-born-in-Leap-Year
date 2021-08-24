const birthDate = document.querySelector('#birthDate');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const message = document.querySelector('.message');

hideMessage();
btn.addEventListener('click', function () {
  let number = birthDate.value.replaceAll('-', '');
  if (number === '') {
    showMessage('Please Select Your DateOfBirth');
  } else {
    toCheckForLeapYear(number);
  }
});

reset.addEventListener('click', function () {
  birthDate.value = '';
  output.innerText = '';
  hideMessage();
});

function showMessage(msg) {
  message.innerText = msg;
  message.style.display = 'block';
}
function hideMessage() {
  message.style.display = 'none';
}

function toCheckForLeapYear(number) {
  var year = Number(number.slice('0', '4'));
  if (year % 400 === 0) {
    success();
  }
  if (year % 100 === 0) {
    success();
  }
  if (year % 4 === 0) {
    success();
  } else {
    failure();
  }
}
function success() {
  output.innerText =
    'Congrats you were born in a leap year✨✨✨. Please do share this JS app on your social media..';
}
function failure() {
  output.innerText =
    'Sorry you were not born in a leap year. Better luck at your next birth😔😔😔...';
}

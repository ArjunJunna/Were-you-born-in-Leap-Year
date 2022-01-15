const birthDate = document.querySelector('#birthDate');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const message = document.querySelector('.message');


btn.addEventListener('click', ()=>{
  let number = birthDate.value.replaceAll('-', '');
  if (number === '') {
    showMessage('Please Select Your DateOfBirth');
  } else {
    toCheckForLeapYear(number);
  }
});

reset.addEventListener('click', ()=> {
  birthDate.value = '';
  output.innerText = '';
  hideMessage();
});

const showMessage=msg=>{
  message.innerText = msg;
  message.style.display = 'block';
}

const hideMessage=()=> message.style.display = 'none';


const toCheckForLeapYear=number=>{
  var year = Number(number.slice('0', '4'));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    success();
  } else {
    failure();
  }
}

const success=()=>{
  output.innerText =`Congrats you were born in a leap year✨✨✨. 
                     Please do share this JS app on your social media..`;
}

const failure=()=>{
  output.innerText =`Sorry you were not born in a leap year. Better luck at your next birth😔😔😔...`;
}

hideMessage();

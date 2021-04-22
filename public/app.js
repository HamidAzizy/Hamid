// console.log('Hello form App.js');

// const { json } = require('express');

const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('input-name');
let email = document.getElementById('input-email');
let subject = document.getElementById('input-subject');
let message = document.getElementById('input-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.log('Submit Button Clicked');

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      (name.value = ''),
        (email.value = ''),
        (subject.value = ''),
        (message.value = ''),
        alert('Message sent ');
    } else {
      alert('Something went wrong');
    }
  };

  xhr.send(JSON.stringify(formData));
  console.log(formData);
});

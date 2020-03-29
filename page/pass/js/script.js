'use strict';

if (document.querySelector('.pg-generate')) {
  document.querySelector('.pg-generate').addEventListener('click', function() {

    if (document.querySelector('.pg-result li')) {
      let passList = generate(),
          li = document.querySelectorAll('.pg-result li');

      for (let i = 0; i < li.length; i++) {
        li[i].textContent = passList[i];
      }
    }
  });
}

function generate() {
  const namberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        lowerCase = ['a', 'b', 'c', 'd', 'i', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        upperCase = ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        symbolCase = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', ',', '.', '/', '?', '\\', '|', '`', '~', '[', ']', '{', '}'];

  let passList = [],
      passListLimit = 5,
      charArray = [],
      qty = 1;

  if (document.querySelector('#pg-figures').checked) {
    charArray = charArray.concat(namberCase);
  }
  if (document.querySelector('#pg-lowercase').checked) {
    charArray = charArray.concat(lowerCase);
  }
  if (document.querySelector('#pg-uppercase').checked) {
    charArray = charArray.concat(upperCase);
  }
  if (document.querySelector('#pg-characters').checked) {
    charArray = charArray.concat(symbolCase);
  }

  if (document.querySelector('.pg-qty').value) {
    qty = document.querySelector('.pg-qty').value;
  }

  for (let i = 0; i < passListLimit; i++) {
    let pass = [];

    for (let j = 0; j < qty; j++) {
      pass.push(charArray[Math.floor(Math.random() * charArray.length)]);
    }

    passList.push(pass.join(''));
  }

  return passList;
}
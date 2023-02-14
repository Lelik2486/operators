"use strict"

// Конструкция if else
if (4 == 9) {
  console.log('OK');
} else {
  console.log('Error');
}

const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('OK!');
}

// конструкция тернарного оператора
//                   true               false
(num === 50) ? console.log('OK!') : console.log('Error'); 


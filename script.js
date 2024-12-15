"use strict";

let input = prompt("Enter an integer:");

if (!input?.trim() || isNaN(input.trim()) || !Number.isInteger(Number(input.trim()))) {
  alert("Error: Please enter a valid integer!");
} else {
  let num = Number(input.trim());

  if (num <= 1) {
    alert(`The number ${num} is not a prime number.`);
  } else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      alert(`The number ${num} is a prime number.`);
    } else {
      alert(`The number ${num} is not a prime number.`);
    }
  }
}



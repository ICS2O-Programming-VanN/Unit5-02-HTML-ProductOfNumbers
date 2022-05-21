// This file contains the JS functions for index.html

'use strict';
/**
 * This function displays all the numbers from the user's inputted min and max
 */
function displayNumbers() {

  // Variables (Gets Max and Min)
  let firstNumber = parseInt(document.getElementById("first-num").value);
  let secondNumber = parseInt(document.getElementById("second-num").value);

  // Initializes Variables
  let product = 0;

  for (let counter = 0; counter < secondNumber; counter++) {
    product += firstNumber;
  }
    
  // Displays numbers from minimum to maximum (Or possible an error message)
  document.getElementById("output").innerHTML = "The product of these two numbers: " + product;
}
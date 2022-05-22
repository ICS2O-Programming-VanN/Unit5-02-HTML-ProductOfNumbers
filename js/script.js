// This file contains the JS functions for index.html

'use strict';
/**
 * This function displays the product of two numbers inputted by the user
 */
function displayNumbers() {

  // Variables (Gets First and Second Integer)
  let firstNumber = parseInt(document.getElementById("first-num").value);
  let secondNumber = parseInt(document.getElementById("second-num").value);

  // Initializes Variables
  let product = 0;
  let outputMessage = "";

  // Ensures that the numbers from user input is positive
  if (firstNumber > 0 && secondNumber > 0) {
    // Calculates product of two numbers
    for (let counter = 0; counter < secondNumber; counter++) {
      product += firstNumber;
    }
    outputMessage = "The product of these two numbers: " + product;
    // IF the user did not fill both boxes with positive integers (Zero is not negative nor positive)
  } else {
    outputMessage = "Please enter a positive integer in BOTH boxes!";
  }
    
    
  // Displays Product of the two numbers (Or possible an error message)
  document.getElementById("output").innerHTML = outputMessage;
}
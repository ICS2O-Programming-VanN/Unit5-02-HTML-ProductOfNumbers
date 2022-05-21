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
  let outputMessage = "";

  // Ensures that the numbers user inputs is positive
  if (firstNumber > 0 && secondNumber > 0) {
    // Calculates product of two classes
    for (let counter = 0; counter < secondNumber; counter++) {
      product += firstNumber;
    }
    outputMessage = "The product of these two numbers: " + product;
    // IF the user did not fill both boxes with positive integers (Zero is not negative nor positive)
  } else {
    outputMessage = "Please enter a positive integer in BOTH boxes!";
  }
    
    
  // Displays numbers from minimum to maximum (Or possible an error message)
  document.getElementById("output").innerHTML = outputMessage;
}
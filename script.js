//basic math functions
function add (a, b){
  let result = a + b;
  return result;
}

function subtract (a, b){
  let result = a - b;
  return result;
}

function multiply (a, b){
  let result = a * b;
  return result;
}

function divide (a, b){
  let result = a / b;
  return result;
}

// variables 
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";


// operate function using calling basic math functions above
function operate (operator, firstNumber, secondNumber){
  if(operator === "+"){
    return add(firstNumber, secondNumber );
  }
  else if (operator === "-"){
    return subtract(firstNumber, secondNumber );
    }
  else if (operator === "*"){
    return multiply(firstNumber, secondNumber );
    }
  else if (operator === "/"){
    if(secondNumber === 0){
      return "Undefined"
    }
    return divide(firstNumber, secondNumber );
    }
}

// DOM elements
let numbers = document.querySelectorAll(".number");
let signs = document.querySelectorAll(".sign");
let clear = document.querySelector(".clear");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".equal")


//populate display when number buttons are pressed
numbers.forEach(number =>
  number.addEventListener('click', populateDisplay)
);

function populateDisplay(e){
  if (displayValue.length < 9) {
    displayValue += e.target.textContent;
    screen.textContent = displayValue;
  } else {
    screen.textContent = "Error";
  }   
}

//showing specific operatiors
signs.forEach(sign=>
  sign.addEventListener('click', showOperator)
);

function showOperator(e){
  firstNumber = displayValue;
  operator = e.target.textContent;
  screen.textContent = operator;
  displayValue = "";
}

//Calculation when equal button is pressed
equal.addEventListener('click', total);

function total() {
  secondNumber = displayValue;
  let sum = operate(operator, parseInt(firstNumber), parseInt (secondNumber));
  displayValue = sum.toString();
  screen.textContent = displayValue;
  console.log(displayValue);
}

//Clearing screen
clear.addEventListener("click", deleteScreen);

function deleteScreen() {
  displayValue = "";
  screen.textContent = displayValue;
}




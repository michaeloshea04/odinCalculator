//Create variables for inputs 
let operator = '';
let previousValue = '';
let currentValue = '';

//Create functions or basic math operators
function addFunc(num1, num2) {
  result = num1 + num2;
  return result;
};

function subtractFunc(num1, num2) {
  result = num1 - num2;
  return result;
};

function multiplyFunc(num1, num2) {
  result = num1 * num2;
  return result;
};

function divideFunc(num1, num2) {
  result = num1 / num2;
  return result;
};


//Function which takes an operator and 2 numbers and calls one of the above functions on the numbers.
function calculate(operatorBitch, num1, num2) {
  num1 = Number(previousValue)
  num2 = Number(currentValue)
  operatorBitch = operator; 
  let result;

  switch (operatorBitch) {
      case '+':
          result = addFunc(num1, num2);
          break;
      case '-':
          result = subtractFunc(num1, num2);
          break;
      case '*':
          result = multiplyFunc(num1, num2);
          break;
      case '/':
          result = divideFunc(num1, num2);
          break;    
      
      default:
          console.log("Unsupported operator");
          return;
  }

  return result;
}

/* Query Selectors */

document.addEventListener("DOMContentLoaded", function(){
  const equalsButton = document.getElementById('equals');
  const clearButton = document.getElementById('clear');
  
  const numberButtons = document.querySelectorAll('.digit');
  const operatorButtons = document.querySelectorAll('.operator'); 
  
  const display = document.getElementById('outputScreen');
  
/* Event listeners */
  equalsButton.addEventListener("click", function(){
    calculate();
    display.textContent = calculate();
  })

  clearButton.addEventListener("click", e => {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.textContent = currentValue;
    console.log(currentValue);
    console.log(operator);
  })

  numberButtons.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    display.textContent = currentValue;
    console.log(`Current value: ${currentValue}`)
    
  }))

  operatorButtons.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    display.textContent = operator;
    console.log(`Operator value: ${operator}`)
    console.log(`Current value: ${currentValue}`)
    console.log(`Previous value: ${previousValue}`)    
  }))

})

function handleNumber(num){
  if(currentValue.length < 6){
    currentValue += num;  
  }  
}

function handleOperator(op){
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}





//Create variables
let number1;
let number2;
let operator;

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

//console.log(addFunc(3,5));
//console.log(subtractFunc(3,5));
//console.log(multiplyFunc(3,5));
//console.log(divideFunc(15,5));

function operate(operator, num1, num2) {

    let result;

    switch (operator) {
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
        // You can add more cases for other operators here
        default:
            console.log("Unsupported operator");
            return;
    }

    return result;
}

console.log(operate('/', 2, 3));

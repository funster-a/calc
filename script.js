const zero = document.querySelector('.btn zero')
const one = document.querySelector('.btn one')
const two = document.querySelector('.btn two')
const three = document.querySelector('.btn three')
const four = document.querySelector('.btn four')
const five = document.querySelector('.btn five')
const six = document.querySelector('.btn six')
const seven = document.querySelector('.btn seven')
const eight = document.querySelector('.btn eight')
const nine = document.querySelector('.btn nine')
const screen = document.querySelector('.screen-text')
let screenValue = '';
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = 0;

function showDisplay(value) {
    screenValue += value;
    document.querySelector('.screen-text').textContent = screenValue;
    // console.log(screenValue)

}

function setOperator(operator){
    if (document.querySelector('.screen-text').textContent !== '') {
        firstNumber = document.querySelector('.screen-text').textContent;
        currentOperator = operator;
        document.querySelector('.screen-text').textContent = '';
    }
}


function add(num1, num2) {
    let firstNumber, secondNumber, operator;
    return num1 + num2
}
function subtract(num1, num2) {
    let firstNumber, secondNumber, operator;
    return num1 - num2
    
}
function multiply(num1, num2) {
    let firstNumber, secondNumber, operator;
    return Math.round(num1 * num2 * 100) / 100
    
    
}
function divide(num1, num2) {
    let firstNumber, secondNumber, operator;
    return Math.round(num1 / num2 * 100) / 100
    
}

function operate() {
    
    add(1, 2)
}


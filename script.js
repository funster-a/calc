function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
    
}
function multiply(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100
    
    
}
function divide(num1, num2) {
    return Math.round(num1 / num2 * 100) / 100
    
}

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

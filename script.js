function add(a,b) {
    let result = a + b;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2);
    }

}

function substract(a,b) {
    let result = a - b;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

function multiply(a,b) {
    let result = a * b;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

function divide(a,b) {
    if (b===0) {
        return "ERROR";
    } else {
        let result = a / b;
        if (Number.isInteger(result)) {
            return result;
        } else {
            return result.toFixed(2);
        }
    }
}

let numberOne = 0;
let numberTwo;
let operator;

function operate(op,one,two) {
    if (op === "plus") {
        console.log(add(one,two));
        return add(one,two);
    } else if (op === "minus") {
        console.log(substract(one,two));
        return substract(one,two);
    } else if (op === "time") {
        console.log(multiply(one,two));
        return multiply(one,two);
    } else if (op === "by") {
        console.log(divide(one,two));
        return divide(one,two);
    }
}

let currentOperand = document.getElementById("current");
let lastOperand = document.getElementById("last");

const inputNumbers = document.querySelectorAll(".input");
inputNumbers.forEach((number) => number.addEventListener("click", writeCurrent))
function writeCurrent(event) {
    currentOperand.textContent += event.target.id;
    disableDecimal();
}

let operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach((button) => button.addEventListener("click", storeOperator));
function storeOperator(e) {
    enableDecimal();
    operator = e.target.id;
    numberOne = Number(currentOperand.textContent);
    lastOperand.textContent = currentOperand.textContent + e.target.textContent;
    currentOperand.textContent = "";

}

function storeSecondValue() {
    numberTwo = Number(currentOperand.textContent);
}

const equal = document.getElementById("equal");
equal.addEventListener("click", calculate);

function calculate(){

    storeSecondValue();
    lastOperand.textContent += String(numberTwo) + "=";
    currentOperand.textContent = "";
    currentOperand.textContent = operate(operator,numberOne,numberTwo);
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click",reset);
function reset() {
    numberOne = 0;
    numberTwo = 0;
    currentOperand.textContent = "";
    lastOperand.textContent = "";
}

let decimalButton = document.getElementById(".");
function disableDecimal() {

    decimalButton.addEventListener("click",disable);
    function disable(e) {
        e.target.disabled = true;
    }
}
function enableDecimal() {
    decimalButton.disabled = false;
}

let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click",deleteLast);
function deleteLast() {
    let newStr = currentOperand.textContent.slice(0, -1);
    currentOperand.textContent = newStr;
}


"use strict";
const inputEL = document.querySelector("#input-el");
const buttonZero = document.querySelector("#btn-zero");
const buttonOne = document.querySelector("#btn-one");
const buttonTwo = document.querySelector("#btn-two");
const buttonThree = document.querySelector("#btn-three");
const buttonFour = document.querySelector("#btn-four");
const buttonFive = document.querySelector("#btn-five");
const buttonSix = document.querySelector("#btn-six");
const buttonSeven = document.querySelector("#btn-seven");
const buttonEight = document.querySelector("#btn-eight");
const buttonNine = document.querySelector("#btn-nine");
const buttonDot = document.querySelector("#btn-dot");
const buttonPlus = document.querySelector("#btn-plus");
const buttonMinus = document.querySelector("#btn-minus");
const buttonDivide = document.querySelector("#btn-divide");
const buttonMultiply = document.querySelector("#btn-multiply");
const resetBtn = document.querySelector("#reset-btn");
const answerBtn = document.querySelector("#answer-btn");
const deleteBtn = document.querySelector("#btn-del");
const valuesArray = [buttonZero, buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine, buttonDot, buttonPlus, buttonMinus, buttonDivide, buttonMultiply];
const operatorsArray = [buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.textContent, buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.textContent, buttonDivide === null || buttonDivide === void 0 ? void 0 : buttonDivide.textContent, buttonMultiply === null || buttonMultiply === void 0 ? void 0 : buttonMultiply.textContent];
let displayValues = () => {
    for (let i = 0; i < valuesArray.length; i++) {
        const button = valuesArray[i];
        if (button) {
            button.addEventListener("click", () => {
                console.log("testing 123");
                console.log("this works too");
                inputEL.value += button.textContent || "";
                console.log("succesful");
            });
        }
    }
};
let firstArray = [];
let preOperation = () => {
    answerBtn === null || answerBtn === void 0 ? void 0 : answerBtn.addEventListener("click", () => {
        let newInputValue = inputEL.value.trim();
        // console.log(`${newInputValue} is ${newInputValue.length} characters long!`)
        firstArray = newInputValue.split("");
        console.log(firstArray);
        console.log("hey, you submitted!");
        let firstValue = "";
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] === '+' || firstArray[i] === '-' || firstArray[i] === 'x' || firstArray[i] === '/')
                break;
            else {
                firstValue += firstArray[i];
            }
        }
        let newFirstValue = Number(firstValue);
        console.log(`The value of the first part of value is ${firstValue} and it was a ${typeof (firstValue)} but now it is of type ${typeof (newFirstValue)}`);
        let operand = "";
        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] === '+' || firstArray[i] === '-' || firstArray[i] === 'x' || firstArray[i] === '/') {
                operand += firstArray[i];
                let operandIndex = firstArray.indexOf(operand);
                console.log(`This is the index of the operand : ${operandIndex}`);
            }
        }
        console.log(`The operand here is ${operand}`);
        let secondValue = "";
        for (let i = firstArray.indexOf(operand) + 1; i < firstArray.length; i++) {
            secondValue += firstArray[i];
        }
        console.log(`The value of the digits after the operand is ${secondValue} and it is of type ${typeof (secondValue)}`);
        let newSecondValue = Number(secondValue);
        console.log(newSecondValue);
        let sum = finalOperation(newFirstValue, newSecondValue, operand);
        if (newSecondValue === 0 && operand === 'x') {
            inputEL.value = "Error";
        }
        else if (newSecondValue === 0 && operand === '/') {
            inputEL.value = "Error";
        }
        else {
            console.log(`The result of ${newFirstValue} ${operand} ${newSecondValue} = ${sum}`);
            let actualSum = String(sum);
            inputEL.value = actualSum;
        }
    });
};
displayValues();
preOperation();
let finalOperation = (number1, number2, operands) => {
    if (operands === '+') {
        return (number1 + number2);
    }
    else if (operands === '-') {
        return (number1 - number2);
    }
    else if (operands === '/') {
        return (number1 / number2);
    }
    else {
        return (number1 * number2);
    }
};
deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", () => {
    let currentInputItems = inputEL === null || inputEL === void 0 ? void 0 : inputEL.value;
    console.log("hey, this button works!");
    let currentItemsArray = currentInputItems === null || currentInputItems === void 0 ? void 0 : currentInputItems.split("");
    console.log(currentItemsArray);
    for (let i = 0; i < 1; i++) {
        currentInputItems = currentItemsArray === null || currentItemsArray === void 0 ? void 0 : currentItemsArray.pop();
        inputEL.value = "";
        console.log(currentItemsArray);
    }
    for (let p = 0; p < currentItemsArray.length; p++) {
        inputEL.value += currentItemsArray[p];
    }
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", () => {
    inputEL.value = "";
});

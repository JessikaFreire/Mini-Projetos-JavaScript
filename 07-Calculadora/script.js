"use strict"

const display = document.getElementById("display")
const numbers = document.querySelectorAll("[id*=key]")
const operators = document.querySelectorAll("[id*=operator]")

let newNumber = true
let operator
let previousNumber

const operationPending = () => operator !== undefined

const calculate = () => {
    if (operationPending()) {
        const currentNumber = parseFloat(display.textContent.replace(",", "."))
        newNumber = true
        const result = eval(`${previousNumber}${operator}${currentNumber}`)
        updateDisplay(result)
    }
}

const updateDisplay = (text) => {
    if (newNumber) {
        display.textContent = text.toLocaleString("BR")
        newNumber = false
    } else {
        display.textContent += text.toLocaleString("BR")
    }
}

const insertNumber = (event) => updateDisplay(event.target.textContent)
numbers.forEach((number) => number.addEventListener("click", insertNumber))

const selectOperator = (event) => {
    if (!newNumber) {
        calculate()
        newNumber = true
        operator = event.target.textContent
        previousNumber = parseFloat(display.textContent.replace(",", "."))
    }
}
operators.forEach((operator) =>
    operator.addEventListener("click", selectOperator)
)

const activateEqual = () => {
    calculate()
    operator = undefined
}
document.getElementById("equal").addEventListener("click", activateEqual)

const clearDisplay = () => (display.textContent = "")
document.getElementById("clearDisplay").addEventListener("click", clearDisplay)

const clearCalculation = () => {
    clearDisplay()
    operator = undefined
    newNumber = true
    previousNumber = undefined
}
document
    .getElementById("clearCalculation")
    .addEventListener("click", clearCalculation)

const removeLastNumber = () =>
    (display.textContent = display.textContent.slice(0, -1))
document
    .getElementById("backspace")
    .addEventListener("click", removeLastNumber)

const reverseSignal = () => {
    newNumber = true
    updateDisplay(display.textContent * -1)
}
document.getElementById("reverse").addEventListener("click", reverseSignal)

const decimalExists = () => display.textContent.indexOf(",") !== -1
const valueExists = () => display.textContent.length > 0
const insertDecimal = () => {
    if (!decimalExists()) {
        if (valueExists()) {
            updateDisplay(",")
        } else {
            updateDisplay("0,")
        }
    }
}
document.getElementById("decimal").addEventListener("click", insertDecimal)

const keyboardMap = {
    0: "key0",
    1: "key1",
    2: "key2",
    3: "key3",
    4: "key4",
    5: "key5",
    6: "key6",
    7: "key7",
    8: "key8",
    9: "key9",
    "/": "operatorDivide",
    "*": "operatorMultiply",
    "-": "operatorSubtract",
    "+": "operatorAdd",
    "=": "equal",
    Enter: "equal",
    Backspace: "backspace",
    c: "clearDisplay",
    Escape: "clearCalculation",
    ",": "decimal",
}

const mapKeyboard = (event) => {
    const key = event.key
    const keyAllowed = () => Object.keys(keyboardMap).indexOf(key) !== -1
    if (keyAllowed()) document.getElementById(keyboardMap[key]).click()
}
document.addEventListener("keydown", mapKeyboard)
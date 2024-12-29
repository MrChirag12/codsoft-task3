let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function appendValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function setOperation(operator) {
    if (currentInput === '') return; 
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentOperator = operator;
        currentInput = '';
        document.getElementById('display').value = operator;
    } else {
        currentOperator = operator;
        document.getElementById('display').value = firstOperand + currentOperator;
    }
}

function calculateResult() {
    if (firstOperand !== null && currentInput !== '') {
        let secondOperand = parseFloat(currentInput);
        let result;
        
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                result = secondOperand;
        }

        document.getElementById('display').value = result;
        currentInput = result.toString();
        firstOperand = null;
        currentOperator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    currentOperator = '';
    document.getElementById('display').value = '';
}

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result');
const errorDisplay = document.getElementById('error');


function calculateResult(a, b, op) {
    if (!isFinite(a) || !isFinite(b)) {
        return { error: 'Число выходит за допустимые пределы' };
    }
    
    if (isNaN(a) || isNaN(b)) {
        return { error: 'Введите оба числа' };
    }
    
    let result;
    
    switch(op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                return { error: 'Деление на ноль невозможно' };
            }
            result = a / b;
            break;
        default:
            return { error: 'Неизвестная операция' };
    }
    
    result = parseFloat(result.toFixed(10));
    
    return { result: result };
}

function updateDisplay(resultValue, errorValue) {
    if (errorValue) {
        errorDisplay.textContent = `Ошибка: ${errorValue}`;
        resultDisplay.textContent = '';
    } else {
        errorDisplay.textContent = '';
        if (resultValue !== undefined) {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            const operation = operationSelect.value;
            resultDisplay.textContent = `${num1} ${operation} ${num2} = ${resultValue}`;
        }
    }
}


function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    

    const calculation = calculateResult(num1, num2, operation);
    
    updateDisplay(calculation.result, calculation.error);
}


calculateBtn.addEventListener('click', calculate);
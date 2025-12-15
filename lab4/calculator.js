
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result');
const errorDisplay = document.getElementById('error');


function calculate() {

    errorDisplay.textContent = '';
    

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    
    if (!isFinite(num1) || !isFinite(num2)) {
    errorDisplay.textContent = 'Ошибка: число выходит за допустимые пределы';
    resultDisplay.textContent = '';
    return;
}

    if (isNaN(num1) || isNaN(num2)) {
        errorDisplay.textContent = 'Ошибка: введите оба числа';
        resultDisplay.textContent = '';
        return;
    }
    
    let result;
    

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                errorDisplay.textContent = 'Ошибка: деление на ноль невозможно';
                resultDisplay.textContent = '';
                return;
            }
            result = num1 / num2;
            break;
    }
    
    

    resultDisplay.textContent = `${num1} ${operation} ${num2} = ${result}`;
}


calculateBtn.addEventListener('click', calculate);

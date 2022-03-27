function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
};

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
};

function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
};

function operate(num1, num2, operator) {
    return operator(num1, num2);
};

const displayInput = document.getElementById('displayId');
const numButtons = document.querySelectorAll('.numbers');
const operateButtons = document.querySelectorAll('.operators');
const handlersButtons = document.querySelectorAll('.handlers');
const dotButton = document.querySelector('.dot');

let calcMemory = {
    num1: "",
    num2: "",
    operator: "",
    sum: ""
};

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        // Если в памяти нет оператора, с клавиатуры вписываем в память 
        // калькулятора первое число, потом выводим его на дисплей.
        if (calcMemory.operator == "") {
            calcMemory.num1 += buttonInnerHTML;
            displayInput.value = calcMemory.num1;    

            if (displayInput.value.includes('.')) {
                dotButton.disabled = true;
            };
        };

        // Если в памяти нет оператора, то очистить дисплей, сохранить 
        // введенное с клавиатуры второе число в память и вывести это число.
        if (calcMemory.operator != "") {
            displayInput.value = "";
            calcMemory.num2 += buttonInnerHTML;
            displayInput.value = calcMemory.num2;

            dotButton.disabled = false;
            if (displayInput.value.includes('.')) {
                dotButton.disabled = true;
            };
        };
    });
});

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+':
                console.log(calcMemory);
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                    calcMemory.operator = "";
                };

                calcMemory.operator = add;
            break;
            case '-': 
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = subtract;
            break;
            case '*':
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = multiply;
            break;
            case '/':
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = divide;
            break;
        };
    });
});

handlersButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case 'AC':
                displayInput.value = "";
                calcMemory = {
                    num1: "",
                    num2: "",
                    operator: ""
                };
                dotButton.disabled = false;
            break;
            case '=':
                calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                displayInput.value = calcMemory.num1;
                calcMemory.operator = "";
                calcMemory.num2 = "";
                dotButton.disabled = false;
            break;
        };
    });
});
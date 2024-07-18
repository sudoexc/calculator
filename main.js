let display = document.getElementById('display');
let currentInput = '';
let lastOperation = '';
let memory = 0;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function appendOperation(operation) {
    if (currentInput !== '' && !lastOperation) {
        currentInput += ' ' + operation + ' ';
        display.value = currentInput;
        lastOperation = operation;
    }
}

function clearLastEntry() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    lastOperation = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace(/ /g, '')).toString();
        display.value = currentInput;
        lastOperation = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput.replace(/ /g, ''))).toString();
        display.value = currentInput;
        lastOperation = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function calculatePower() {
    try {
        currentInput = eval(currentInput.replace(/ /g, '')) ** 2;
        display.value = currentInput;
        lastOperation = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function addToMemory() {
    try {
        memory += eval(currentInput.replace(/ /g, ''));
        display.value = '';
        currentInput = '';
        lastOperation = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function subtractFromMemory() {
    try {
        memory -= eval(currentInput.replace(/ /g, ''));
        display.value = '';
        currentInput = '';
        lastOperation = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function recallMemory() {
    try {
        currentInput += memory;
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        lastOperation = '';
    }
}

function clearMemory() {
    memory = 0;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.querySelectorAll('.calculator, #display, .buttons button').forEach(item => {
        item.classList.toggle('dark-theme');
    });
}

// Функция для управления клавиатурой
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key)) {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperation(key);
    } else if (key === 'Backspace') {
        clearLastEntry();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    }
});

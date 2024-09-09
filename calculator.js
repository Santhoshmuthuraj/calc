let xValue = null;  // Variable to store the value of x

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.substr(0, currentValue.length - 1);
    }
}

function assignX() {
    const display = document.getElementById('display');
    // Get the value from the input field and store it as the value of x
    xValue = parseFloat(display.value);
    display.value = '';  // Clear the display after assignment
}

function computeResult() {
    const display = document.getElementById('display');
    let expression = display.value;
    
    // Replace occurrences of 'x' in the expression with the value of x
    if (xValue !== null) {
        expression = expression.replace(/x/g, xValue);
    }

    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let input = '';
let opr = '';
let lastinput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            input = '';
            opr = '';
            lastinput = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (opr && input && lastinput) {
                input = eval(`${lastinput} ${opr} ${input}`);
                display.textContent = input;
                opr = '';
                lastinput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (input) {
                opr = value;
                lastinput = input;
                input = '';
            }
        } else {
            input += value;
            display.textContent = input;
        }
    });
});

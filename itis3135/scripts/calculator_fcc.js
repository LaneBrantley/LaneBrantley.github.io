const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
   }
})
const key = e.target;
const action = key.dataset.action;
if (!action) {
    if (displayedNum === '0') {
        display.textContent = keyContent;
    }
    else {
        display.textContent = displayedNum + keyContent;
    }
}
if (action == "add" || action == "subtract" || action == "multiply" || action == "divide") {
    key.classList.add('is-depressed');
}

if (action == "decimal") {
    display.textContent = displayedNum + '.';
}
if (action == "clear") {
    console.log('clear key!');
}
if (action == "calculate") {
    console.log('equal key!');
}


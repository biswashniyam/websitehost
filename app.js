
const screen = document.querySelector('.screen input');
function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch(value) {
            case 'AC':
                clearScreen();
                break;
            case 'DEL':
                deleteLast();
                break;
            case '=':
                calculate();
                break;
            default:
                appendValue(value);
        }
    });
});

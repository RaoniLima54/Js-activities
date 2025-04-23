const display = document.getElementById('display');
let currentInput = "";

// Adiciona valor ao display
function appendValue(value) {
    if (value === 'x') value = '*'; // substitui o x por *
    currentInput += value;
    display.innerText = currentInput;
}

// Limpa o display
function clearDisplay() {
    currentInput = "";
    display.innerText = "";
}

// Apaga o último caractere
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput;
}

// Calcula o resultado
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = "Erro";
        currentInput = "";
    }
}

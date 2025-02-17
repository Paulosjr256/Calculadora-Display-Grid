function adicionarCaracter(caracter) {
    const display = document.getElementById('display');
    display.value += caracter;
}

function limparTela() {
    document.getElementById('display').value = '';
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

function inverterSinal() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = String(-1 * parseFloat(display.value));
    }
}
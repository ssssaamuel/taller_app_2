function identificarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        resultado.classList.remove('even', 'odd');
        resultado.classList.add('invalid');
        resultado.textContent = 'Debe ingresar números enteros positivos.';
    } else {
        resultado.classList.remove('invalid');

        if (numero % 2 === 0) {
            resultado.classList.remove('odd');
            resultado.classList.add('even');
            resultado.textContent = 'Par';
        } else {
            resultado.classList.remove('even');
            resultado.classList.add('odd');
            resultado.textContent = 'Impar';
        }
    }
}
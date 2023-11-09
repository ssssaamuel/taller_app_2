function identificarNumeros() {
    const listaNumerosInput = document.getElementById('listaNumeros').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    if (!listaNumerosInput) {
        resultado.innerHTML = '<li>Por favor, ingrese una lista de números.</li>';
        return;
    }

    const listaNumeros = listaNumerosInput.split(',').map(numero => numero.trim());

    listaNumeros.forEach(numero => {
        const num = parseFloat(numero);

        if (!Number.isInteger(num) || num < 0) {
            resultado.innerHTML += `<li>${numero} no es un número entero positivo.</li>`;
        } else {
            if (num % 2 === 0) {
                resultado.innerHTML += `<li>${num} es número par.</li>`;
            } else {
                resultado.innerHTML += `<li>${num} es número impar.</li>`;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('valor');
    const resultado = document.getElementById('resultado');

    input.addEventListener('input', function() {
        const valorIngresado = input.value;

        if (!isNaN(valorIngresado)) {
            resultado.textContent = 'Tipo de dato: número';
        } else {
            resultado.textContent = 'Tipo de dato: texto';
        }
    });
});

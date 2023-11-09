document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto');
    const resultado = document.getElementById('resultado');

    textarea.addEventListener('input', function() {
        const textoIngresado = textarea.value;
        const numeroCaracteres = textoIngresado.length;

        resultado.textContent = `Número de caracteres: ${numeroCaracteres}`;
    });
});

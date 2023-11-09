function buscarTexto() {
    const texto = document.getElementById('texto').value;
    const busqueda = document.getElementById('busqueda').value;
    const resultado = document.getElementById('resultado');

    if (!texto || !busqueda) {
        resultado.textContent = 'Por favor, ingrese un texto y una palabra/frase a buscar.';
        return;
    }

    const regex = new RegExp(busqueda, 'gi');
    const textoResaltado = texto.replace(regex, match => `<span class="highlight">${match}</span>`);

    resultado.innerHTML = textoResaltado;
}

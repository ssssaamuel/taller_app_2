function verificarEdad() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(edad) || edad < 0) {
        resultado.textContent = 'No es una edad válida.';
    } else if (edad >= 18) {
        resultado.textContent = `Hola ${nombre}, eres mayor de edad.`;
    } else {
        resultado.textContent = `Hola ${nombre}, no eres mayor de edad.`;
    }
}

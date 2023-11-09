function verificarDivisibilidad() {
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    const resultado = document.getElementById('resultado');

    // Validaciones
    if (!Number.isInteger(numeroA) || !Number.isInteger(numeroB) || numeroA <= 0 || numeroB <= 0) {
        resultado.classList.add('invalid');
        resultado.textContent = 'Por favor, ingrese dos números enteros positivos.';
        return;
    }

    resultado.classList.remove('invalid');

    // Verificar divisibilidad
    if (numeroA % numeroB === 0) {
        resultado.textContent = `El número ${numeroA} es divisible entre el número ${numeroB}.`;
    } else {
        resultado.textContent = `El número ${numeroA} no es divisible entre el número ${numeroB}.`;
    }
}

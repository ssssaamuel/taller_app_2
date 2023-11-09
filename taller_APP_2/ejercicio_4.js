function verificarMateria() {
    const nombre = document.getElementById('nombre').value;
    const materia = document.getElementById('materia').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
        resultado.innerHTML = 'Por favor, ingrese notas válidas en el rango de 0.0 a 5.0.';
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3.0) {
        resultado.classList.remove('failed');
        resultado.classList.add('passed');
        resultado.innerHTML = `Felicitaciones ${nombre}, tu nota es ${promedio.toFixed(2)}. Pasaste la materia ${materia}.`;
    } else {
        resultado.classList.remove('passed');
        resultado.classList.add('failed');
        resultado.innerHTML = `Lo siento ${nombre}, tu nota es ${promedio.toFixed(2)}. No pasaste la materia ${materia}.`;
    }
}
    
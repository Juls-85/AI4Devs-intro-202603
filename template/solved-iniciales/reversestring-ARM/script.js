function procesarTexto() {
    const input = document.getElementById('userInput');
    const valor = input.value;
    const resultElement = document.getElementById('result');
    const boton = document.getElementById('btnInvertir');

    // 1. Invertir la cadena en tiempo real
    const textoInvertido = valor.split('').reverse().join('');
    resultElement.textContent = textoInvertido;

    // 2. Lógica del botón (aparece si el texto es mayor a 3 caracteres)
    if (valor.length > 3) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

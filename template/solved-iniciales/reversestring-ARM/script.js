function invertirTexto() {
    // 1. Capturamos el valor del input
    const input = document.getElementById('userInput').value;
    
    // 2. Lógica de inversión:
    // .split('') separa el texto en letras: "Hola" -> ["H", "o", "l", "a"]
    // .reverse() invierte el array: ["a", "l", "o", "H"]
    // .join('') une las letras de nuevo: "aloH"
    const textoInvertido = input.split('').reverse().join('');
    
    // 3. Mostramos el resultado en el HTML
    document.getElementById('result').innerText = textoInvertido;
}

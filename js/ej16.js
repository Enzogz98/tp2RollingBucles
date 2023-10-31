function invertirTexto() {
    let textoInput = document.getElementById("textoInput");
    let texto = textoInput.value;
    let resultado = document.getElementById("resultado");

    let textoInvertido = texto.split('').reverse().join('');

    resultado.textContent = "Texto Invertido: " + textoInvertido;
}
function convertirAMayusculas() {
    let textoInput = document.getElementById("textoInput");
    let texto = textoInput.value;
    let resultado = document.getElementById("resultado");
    let textoEnMayusculas = texto.toUpperCase();
    resultado.textContent = "Texto en Mayúsculas: " + textoEnMayusculas;
}
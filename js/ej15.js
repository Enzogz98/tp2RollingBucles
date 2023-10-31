function contarVocales() {
    let textoInput = document.getElementById("textoInput");
    let texto = textoInput.value.toLowerCase(); 
    let resultado = document.getElementById("resultado");

    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
      }
    }

    resultado.textContent = "Número de Vocales: " + contadorVocales;
  }
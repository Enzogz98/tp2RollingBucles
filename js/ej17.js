function encontrarPrimeraVocal() {
    let textoInput = document.getElementById("textoInput");
    let texto = textoInput.value.toLowerCase(); 

    let resultado = document.getElementById("resultado");
    let primeraVocal = -1; 

    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      if ('aeiou'.includes(caracter)) {
        primeraVocal = i;
        break; 
      }
    }

    if (primeraVocal !== -1) {
      resultado.textContent = "La primera vocal está en la posición: " + (primeraVocal + 1); 
    } else {
      resultado.textContent = "No se encontraron vocales en el texto.";
    }
  }
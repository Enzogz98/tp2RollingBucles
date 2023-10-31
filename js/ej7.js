function crearPiramide() {
    let numeroInput = document.getElementById("numeroInput");
    let resultado = document.getElementById("resultado");
    let numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero <= 0 || numero > 50) {
      resultado.innerHTML = "Por favor, ingrese un número válido entre 1 y 50.";
    } else {
      let piramide = '';
      for (let i = numero; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
          piramide += i;
        }
        piramide += '<br>';
      }
      resultado.innerHTML = piramide;
    }
  }
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Número Aleatorio: " + numeroAleatorio;
  }
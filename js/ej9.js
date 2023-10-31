function generarNumeros() {
    let resultado = document.getElementById("resultado");
    let lineas = '';

    for (let i = 1; i <= 500; i++) {
      lineas += i;
      if (i % 4 === 0) {
        lineas += " (Múltiplo de 4)";
      }
      if (i % 9 === 0) {
        lineas += " (Múltiplo de 9)";
      }
      lineas += '\n';

      if (i % 5 === 0) {
        lineas += '-------------------------------------------------\n';
      }
    }

    resultado.innerHTML = lineas;
  }


let cadenaSeparada = ''; 
let continuar = true; 

function separarConSigno() {
  if (continuar) {
    let cadenaInput = document.getElementById("cadenaInput");
    let cadena = cadenaInput.value;
    let resultado = document.getElementById("resultado");
    
    for (let i = 0; i < cadena.length; i++) {
      if (i === cadena.length - 1) {
        cadenaSeparada += cadena[i];
      } else {
        cadenaSeparada += cadena[i] + '-';
      }
    }

    resultado.textContent = "Cadena con Signo -: " + cadenaSeparada;
    cadenaInput.value = ""; 
    continuar = confirm("¿Desea continuar ingresando caracteres? Presione 'Cancelar' para finalizar.");
  }
}

function limpiarParas() {
    let resultado = document.getElementById("resultado");
    let cadenaSeparada = ''; 
    resultado.textContent = "Cadena con Signo -: " + cadenaSeparada;
}
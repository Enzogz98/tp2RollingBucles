function verificarEdad() {
    let edadInput = document.getElementById("edadInput");
    let mensaje = document.getElementById("mensaje");
    let edad = parseInt(edadInput.value);

    while (isNaN(edad)) {
      mensaje.innerHTML = "La edad ingresada no es un número válido. Por favor, inténtelo de nuevo.";
      edadInput.value = ""; 
      return; 
    }

    if (edad >= 18) {
      mensaje.innerHTML = "¡Ya puede conducir!";
    } else {
      mensaje.innerHTML = "Lo sentimos, no puede conducir. Debe ser mayor de 18 años.";
    }
  }
function encontrarMayor() {
    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = parseInt(document.getElementById("edad1").value);
    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = parseInt(document.getElementById("edad2").value);
    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = parseInt(document.getElementById("edad3").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
      resultado.textContent = "Por favor, ingrese edades válidas.";
    } else {
      let mayorEdad = Math.max(edad1, edad2, edad3);
      let nombreMayor = "";

      if (mayorEdad === edad1) {
        nombreMayor = nombre1;
      } else if (mayorEdad === edad2) {
        nombreMayor = nombre2;
      } else {
        nombreMayor = nombre3;
      }

      resultado.textContent = "El mayor es " + nombreMayor;
    }
  }
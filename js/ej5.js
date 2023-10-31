function calcularLetraDNI() {
    while (true) {
      let numeroDNI = prompt("Ingrese el número del DNI (0-99999999) para calcular la letra:");

      if (numeroDNI === null) {
        break; 
      }

      numeroDNI = parseInt(numeroDNI);

      if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const resto = numeroDNI % 23;
        const letraDNI = letras.charAt(resto);
        alert("La letra del DNI " + numeroDNI + " es: " + letraDNI);
      } else {
        alert("El número del DNI debe estar entre 0 y 99999999.");
      }
    }
}
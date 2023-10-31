function sumarNumeros() {
    let suma = 0;
    let continuar = true;

    while (continuar) {
      let numero = prompt("Por favor, ingrese un número:");
      
      if (numero === null) {
        break; 
      } else if (!isNaN(numero)) {
        suma += parseFloat(numero); 
      } else {
        alert("Esto no es un número válido. Por favor, ingrese un número.");
      }

      continuar = confirm("¿Desea ingresar otro número?");
    }

    alert("La suma total de los números introducidos es: " + suma);
  }
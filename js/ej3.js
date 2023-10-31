function ingresarCadenas() {
    let textoConcatenado = ""; 
    let continuar = true;

    while (continuar) {
      let texto = prompt("Por favor, ingrese una cadena de texto:");

      if (texto === null) {
        continuar = false;
      } else {
        textoConcatenado += texto + "-"; 
        continuar = confirm("¿Desea ingresar otra cadena de texto?");
      }
    }

    if (textoConcatenado !== "") {
      
      alert("Cadenas concatenadas: " + textoConcatenado.slice(0, -1)); 
    } else {
      alert("No se ingresaron cadenas.");
    }
  }
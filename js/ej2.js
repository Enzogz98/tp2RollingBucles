function calificar() {
    let notaInput = document.getElementById("notaInput");
    let nota = parseFloat(notaInput.value);

    while (isNaN(nota) || nota < 0 || nota > 10) {
      alert("Número erróneo o fuera del rango. Debe ingresar una nota válida entre 0 y 10.");
      notaInput.value = ""; 
      nota = parseFloat(prompt("Por favor, ingrese una nota válida (de 0 a 10):"));
    }

    if (nota >= 0 && nota <= 2) {
      alert("Muy deficiente");
    } else if (nota >= 3 && nota <= 4) {
      alert("Insuficiente");
    } else if (nota >= 5 && nota <= 6) {
      alert("Suficiente");
    } else if (nota === 7) {
      alert("Bien");
    } else if (nota >= 8 && nota <= 9) {
      alert("Notable");
    } else if (nota === 10) {
      alert("Sobresaliente");
    }
  }
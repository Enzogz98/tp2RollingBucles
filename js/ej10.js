function generarTabla() {
    let filasInput = document.getElementById("filasInput");
    let columnasInput = document.getElementById("columnasInput");
    let tabla = document.getElementById("tabla");

    let filas = parseInt(filasInput.value);
    let columnas = parseInt(columnasInput.value);

    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
      alert("Ingrese un número válido para filas y columnas.");
    } else {
      let numero = filas * columnas;

      let tablaHTML = '<tbody>';

      for (let i = 1; i <= filas; i++) {
        tablaHTML += '<tr>';
        for (let j = 1; j <= columnas; j++) {
          tablaHTML += '<td>' + numero + '</td>';
          numero--;
        }
        tablaHTML += '</tr>';
      }

      tablaHTML += '</tbody>';
      tabla.innerHTML = tablaHTML;
    }
  }
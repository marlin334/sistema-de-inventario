
document.addEventListener('DOMContentLoaded', () => {
    const productoSelect = document.getElementById('productoEntrada');
    const cantidadInput = document.getElementById('cantidadEntrada');
    const form = document.getElementById('entradaForm');
    const tabla = document.getElementById('tablaEntradas');
    let historialEntradas = [];
  
    // Cargar productos
    function cargarProductos() {
      productoSelect.innerHTML = '';
      productos.forEach((p, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = p.nombre;
        productoSelect.appendChild(option);
      });
    }
  
    // Mostrar historial
    function renderTabla() {
      tabla.innerHTML = '';
      historialEntradas.forEach((entrada) => {
        const fila = `
          <tr>
            <td>${entrada.nombreProducto}</td>
            <td>${entrada.cantidad}</td>
            <td>${entrada.fecha}</td>
          </tr>`;
        tabla.innerHTML += fila;
      });
    }
  
    // Registrar entrada
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const indexProducto = parseInt(productoSelect.value);
      const cantidad = parseInt(cantidadInput.value);
  
      if (!productos[indexProducto]) return;
  
      productos[indexProducto].cantidad += cantidad;
  
      historialEntradas.push({
        nombreProducto: productos[indexProducto].nombre,
        cantidad,
        fecha: new Date().toLocaleString()
      });
  
      form.reset();
      renderTabla();
    });
  
    cargarProductos();
    renderTabla();
  });
  


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Entrada de Productos</title>
  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
  <div class="container">
    <h2>Entrada de Productos</h2>

    <form id="entradaForm">
      <label for="productoEntrada">Producto:</label>
      <select id="productoEntrada" required></select>

      <label for="cantidadEntrada">Cantidad a ingresar:</label>
      <input type="number" id="cantidadEntrada" required min="1">

      <button type="submit">Registrar Entrada</button>
    </form>

    <h3>Historial de Entradas</h3>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody id="tablaEntradas"></tbody>
    </table>

    <br>
    <a href="menu.html" class="btn">Volver al Menú</a>
  </div>

  <script src="js/data.js"></script>
  <script src="js/entrada.js"></script>
</body>
</html>

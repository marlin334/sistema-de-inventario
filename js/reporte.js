document.addEventListener('DOMContentLoaded', () => {
    const filtro = document.getElementById('filtroCategoria');
    const tabla = document.getElementById('tablaReporte');
  
    // Cargar categorías al filtro
    function cargarFiltro() {
      categorias.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.nombre;
        opt.textContent = cat.nombre;
        filtro.appendChild(opt);
      });
    }
  
    function obtenerNombreCategoria(idCat) {
      const cat = categorias.find(c => c.id === idCat);
      return cat ? cat.nombre : 'Sin categoría';
    }
  
    function renderTabla(filtroCat) {
      tabla.innerHTML = '';
      productos.forEach(prod => {
        const nombreCat = obtenerNombreCategoria(prod.categoriaId);
        if (filtroCat !== 'todas' && nombreCat !== filtroCat) return;
  
        const fila = `
          <tr>
            <td>${prod.nombre}</td>
            <td>${nombreCat}</td>
            <td>$${prod.precio.toFixed(2)}</td>
            <td>${prod.cantidad}</td>
          </tr>`;
        tabla.innerHTML += fila;
      });
    }
  
    filtro.addEventListener('change', () => {
      renderTabla(filtro.value);
    });
  
    cargarFiltro();
    renderTabla('todas');
  });
  

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reporte de Inventario</title>
  <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
  <div class="container">
    <h2>Reporte General de Inventario</h2>

    <label for="filtroCategoria">Filtrar por Categoría:</label>
    <select id="filtroCategoria">
      <option value="todas">Todas</option>
    </select>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody id="tablaReporte"></tbody>
    </table>

    <br>
    <a href="menu.html" class="btn">Volver al Menú</a>
  </div>

  <script src="js/data.js"></script>
  <script src="js/reporte.js"></script>
</body>
</html>

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('productoConsulta');
    const resultado = document.getElementById('resultadoConsulta');
  
    function cargarProductos() {
      productos.forEach((prod, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = prod.nombre;
        selector.appendChild(opt);
      });
    }
  
    function mostrarInfo(index) {
      if (index === "") {
        resultado.innerHTML = "";
        return;
      }
  
      const prod = productos[index];
      const categoria = categorias.find(c => c.id === prod.categoriaId);
      resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${prod.nombre}</p>
        <p><strong>Categoría:</strong> ${categoria ? categoria.nombre : 'Sin categoría'}</p>
        <p><strong>Precio:</strong> $${prod.precio.toFixed(2)}</p>
        <p><strong>Cantidad en inventario:</strong> ${prod.cantidad}</p>
      `;
    }
  
    selector.addEventListener('change', () => {
      mostrarInfo(selector.value);
    });
  
    cargarProductos();
  });
  
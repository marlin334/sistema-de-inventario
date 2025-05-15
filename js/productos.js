document.addEventListener('DOMContentLoaded', () => {
    const categoriaSelect = document.getElementById('categoria');
    const form = document.getElementById('productoForm');
    const tabla = document.getElementById('tablaProductos');
    let editandoId = null;
  
    // Cargar categorías en el select
    categorias.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.id;
      option.textContent = cat.nombre;
      categoriaSelect.appendChild(option);
    });
  
    // Mostrar productos
    function renderTabla() {
      tabla.innerHTML = '';
      productos.forEach((prod, index) => {
        const categoria = categorias.find(cat => cat.id == prod.categoriaId);
        const fila = `
          <tr>
            <td>${prod.nombre}</td>
            <td>${categoria ? categoria.nombre : 'Sin categoría'}</td>
            <td>${prod.cantidad}</td>
            <td>
              <button onclick="editarProducto(${index})">Editar</button>
              <button onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
          </tr>`;
        tabla.innerHTML += fila;
      });
    }
  
    // Guardar producto
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const categoriaId = parseInt(categoriaSelect.value);
      const cantidad = parseInt(document.getElementById('cantidad').value);
  
      if (editandoId !== null) {
        productos[editandoId] = { nombre, categoriaId, cantidad };
        editandoId = null;
      } else {
        productos.push({ nombre, categoriaId, cantidad });
      }
  
      form.reset();
      renderTabla();
    });
  
    // Acciones globales
    window.editarProducto = (index) => {
      const prod = productos[index];
      document.getElementById('nombre').value = prod.nombre;
      document.getElementById('categoria').value = prod.categoriaId;
      document.getElementById('cantidad').value = prod.cantidad;
      editandoId = index;
    };
  
    window.eliminarProducto = (index) => {
      if (confirm('¿Eliminar este producto?')) {
        productos.splice(index, 1);
        renderTabla();
      }
    };
  
    renderTabla();
  });
  
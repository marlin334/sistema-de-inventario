document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('categoriaForm');
    const tabla = document.getElementById('tablaCategorias');
    let editandoIndex = null;
  
    function renderTabla() {
      tabla.innerHTML = '';
      categorias.forEach((cat, index) => {
        const fila = `
          <tr>
            <td>${cat.nombre}</td>
            <td>
              <button onclick="editarCategoria(${index})">Editar</button>
              <button onclick="eliminarCategoria(${index})">Eliminar</button>
            </td>
          </tr>`;
        tabla.innerHTML += fila;
      });
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombreCategoria').value;
  
      if (editandoIndex !== null) {
        categorias[editandoIndex].nombre = nombre;
        editandoIndex = null;
      } else {
        const nuevoId = categorias.length > 0 ? categorias[categorias.length - 1].id + 1 : 1;
        categorias.push({ id: nuevoId, nombre });
      }
  
      form.reset();
      renderTabla();
    });
  
    window.editarCategoria = (index) => {
      document.getElementById('nombreCategoria').value = categorias[index].nombre;
      editandoIndex = index;
    };
  
    window.eliminarCategoria = (index) => {
      if (confirm('¿Eliminar esta categoría?')) {
        categorias.splice(index, 1);
        renderTabla();
      }
    };
  
    renderTabla();
  });
  
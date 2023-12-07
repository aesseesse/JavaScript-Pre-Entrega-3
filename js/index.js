//dada una cantidad de productos con precios y descuentos, ingresar la cantidad, calcular el subtotal de cada producto y el total de la compra.


// Función para obtener datos del localStorage o inicializar un array vacío
function obtenerCompras() {
    return JSON.parse(localStorage.getItem('compras')) || [];
  }
  
  // Función para guardar las compras en el localStorage
function guardarCompras(resumenCompras) {
  localStorage.setItem('resumenCompras', JSON.stringify(resumenCompras));
  }
  
  let total = 0;
  let items = obtenerCompras(); // Obtener compras existentes del localStorage
  
  // Función para agregar una compra
  function agregarCompra() {
    
    //Obtener dato ingresado el nombre del producto
    const producto = document.getElementById('producto').value ;
   
    //Obtener dato ingresado en precio
    const precio = parseFloat(document.getElementById('precio').value);  
    
    //Obtener dato ingresado en descuento
    const descuento = parseFloat(document.getElementById('descuento').value); 
   
    //Obtener dato ingresado en cantidad
    const cantidad = parseInt(document.getElementById('cantidad').value); 
  
    //En caso de estar vacio, o que sea un numero negativo dara una alert informando el error
    if (!producto || isNaN(precio) || isNaN(descuento) || isNaN(cantidad)) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    if ( precio <=0 || descuento <0 || cantidad <=0) {
        alert('Por favor, verifique los campos precio, descuento, cantidad. Deben ser mayor a 0');

        return;
    }

    //Calcular subtotal sin descuento
    const subtotal = precio * cantidad;  
    //Calcular descuento
    const descuentoAplicado = subtotal * (descuento / 100); 
    //Calcular subtotal con descuento
    const totalProducto = subtotal - descuentoAplicado; 
    //Calcular total de la compra sumando los sucesivos totalproducto
    total += totalProducto;

    // Crear un objeto item con producto, precio, descuento, cantidad, subtotal, descuentoAplicado, totalProducto
    const item = {
      producto,
      precio,
      descuento,
      cantidad,
      subtotal,
      descuentoAplicado,
      totalProducto
    };
    // Agregar la compra a la lista de items
    items.push(item); 
    // Guardar en localStorage
    guardarCompras(items); 
    
    // Mostrar resumen de la compra
    mostrarResumen();
  }
  
  // Función para mostrar el resumen de la compra
  export function mostrarResumen() {
    const resumenDiv = document.getElementById('resumen');
    resumenDiv.innerHTML = '<h3>Resumen de la compra:</h3>';
  
    //Por cada producto que agrego a la compra, realiza un resumen. Con ${item.} obtengo el valor del objeto item
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <p>Producto: ${item.producto}</p>
        <p>Precio: ${item.precio}</p>
        <p>Descuento: ${item.descuento}%</p>
        <p>Cantidad: ${item.cantidad}</p>
        <p>Subtotal: ${item.subtotal}</p>
        <p>Descuento Aplicado: ${item.descuentoAplicado}</p>
        <p>Total Producto: ${item.totalProducto}</p>
      `;
      resumenDiv.appendChild(itemDiv);
    });

    // Agrega un total de la compra a realizar
    resumenDiv.innerHTML += `<p>Total a Pagar: ${total}</p>`;
  }
  


  // Función para finalizar la compra
  function finalizarCompra() {
    alert(`Compra finalizada. Total a pagar: ${total}`);
    window.location.href = "./pages/direccion.html";
  }
  
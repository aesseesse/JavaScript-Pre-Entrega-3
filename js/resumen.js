//leer los 2 objetos guardados (resumen de compra y direccion) y presentar un resumen para final la compra.


//leer los objetos
// Obtener los objetos desde localStorage
const resumenCompras = JSON.parse(localStorage.getItem('resumenCompras'));

const destinatario = JSON.parse(localStorage.getItem('destinatario'));

console.log(destinatario)
console.log(resumenCompras)
mostrarDestinatario()



function mostrarDestinatario() {
  
  const usuarioInfo = document.getElementById('destinatarioInfo');
  usuarioInfo.innerHTML = '<h3>Destinatario:</h3>';

  usuarioInfo.innerHTML = `
    <p>nombre: ${destinatario.nombre}</p>
    <p>apellido: ${destinatario.apellido}</p>
    <p>calle: ${destinatario.calle}</p>
    <p>altura: ${destinatario.altura}</p>
    <p>cp: ${destinatario.cp}</p>
    <p>ciudad: ${destinatario.ciudad}</p>
  `;
}

mostrarResumen()

function mostrarResumen() {

  const resumenInfo = document.getElementById('resumen');
  resumenInfo.innerHTML = '<h3>Resumen de compra:</h3>';

  for (let i = 0; i < resumenCompras.length; i++) {
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
  }
  
}

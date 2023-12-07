const form = document.getElementById('addressForm');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const calle = document.getElementById('calle').value;
  const altura = document.getElementById('altura').value;
  const cp = document.getElementById('cp').value;
  const ciudad = document.getElementById('ciudad').value;

  // Crear un objeto con los datos del destinatario
  const destinatario = {
    nombre,
    apellido,
    calle,
    altura,
    cp,
    ciudad 
  };

  // Guardar los datos del destinatario en el localStorage
  localStorage.setItem('destinatario', JSON.stringify(destinatario));

  // Mostrar un alert al usuario
  alert('Datos guardados correctamente. Serás redirigido.');
  // Redirigir a otra página después de aceptar el alert
  window.location.href = './resumen.html';
});

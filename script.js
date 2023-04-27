function votar() {
  var candidatos = document.getElementsByName('candidato');
  var candidatoSeleccionado = '';
  for (var i = 0; i < candidatos.length; i++) {
    if (candidatos[i].checked) {
      candidatoSeleccionado = candidatos[i].value;
      break;
    }
  }
  if (candidatoSeleccionado !== '') {
    var codigoVotacion = generarCodigo();
    guardarVotacion(candidatoSeleccionado, codigoVotacion);
    var mensaje = 'Gracias por participar en la encuesta. Su voto ha sido guardado con éxito. Su código de votación es: ' + codigoVotacion;
    document.getElementById('mensaje').innerHTML = mensaje;
  } else {
    alert('Por favor seleccione un candidato antes de votar.');
  }
}

function generarCodigo() {
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var codigo = '';
  for (var i = 0; i < 8; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return codigo;
}

function guardarVotacion(candidato, codigo) {
  // Aquí iría el código para guardar la votación en la base de datos o en algún archivo de texto.
}

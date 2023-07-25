let especialidad = prompt("Elija una especialidad: cardiología, dermatología, ginecología, odontología");
let tipoConsulta = prompt("Tipo de consulta (con turno, urgencia o apretar aceptar si desea ver todas las opciones)");
let prepaga = prompt("Filtrar por prepaga (si, no o apretar aceptar si desea ver todas las opciones)");

console.log(especialidades);

const datosBusqueda = {
  nombreEsp: especialidad,
  tipoConsulta: tipoConsulta,
  prepaga: prepaga,
};

console.log(datosBusqueda);

const mostrarEspecialidad = (especialidades) => {
  especialidades.forEach((esp) => {
    console.log(
      "Nombre de la especialidad: " +
      esp.nombre +
      ", Tipo de consulta: " +
      esp.tipoDeConsulta +
      ", Recibe prepaga: " +
      esp.recibePrepaga +
      " Nombre del profesional: " +
      esp.nombreProfesional +
      ", Descripción de la especialidad: " +
      esp.descripcion
    );
  });
};

const noResultados = () => {
  console.log("No hay resultados para tu búsqueda");
};

const filtrarEsp = (espNombre) => {
  return datosBusqueda.nombreEsp ? espNombre.nombre === datosBusqueda.nombreEsp : espNombre;
};

const filtrarConsulta = (consultaCliente) => {
  return datosBusqueda.tipoConsulta ? consultaCliente.tipoDeConsulta === datosBusqueda.tipoConsulta : consultaCliente;
};

const filtrarPrepaga = (prepagaSiNo) => {
  return datosBusqueda.prepaga ? prepagaSiNo.recibePrepaga === datosBusqueda.prepaga : prepagaSiNo;
};

const filtrarProfesion = (especialidades) => {
  const resultado = especialidades.filter(filtrarEsp).filter(filtrarConsulta).filter(filtrarPrepaga);
  console.log(resultado.length);
  resultado.length ? mostrarEspecialidad(resultado) : noResultados();
};

filtrarProfesion(especialidades);

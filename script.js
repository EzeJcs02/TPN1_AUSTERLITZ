function abrirUbicacion() {
  var nombre = document.getElementById("nombre").value;
  var lat = document.getElementById("lat").value;
  var lng = document.getElementById("lng").value;
  var mensaje = document.getElementById("mensaje");

  // valido que esten cargados los campos de latitud y longitud
  if (lat === "" || lng === "") {
    mensaje.textContent = "Falta cargar la latitud y/o la longitud";
    return;
  }

  mensaje.textContent = "";

  // arma la url de google maps con las coordenadas cargadas
  var url = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;

  console.log("Abriendo ubicacion: " + nombre + " -> " + lat + "," + lng);

  window.open(url, "_blank");
}
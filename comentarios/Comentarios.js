var stars = document.getElementsByClassName("star"); // Obtener todas las estrellas
var starSelected = false; // Variable para indicar si se ha seleccionado una estrella
var Cantidad = 0;

function rate(num) {
  // Resaltar todas las estrellas anteriores a la seleccionada
  for (var i = 0; i < num; i++) {
    stars[i].classList.add("highlight");
  }

  // Quitar el resaltado de las estrellas siguientes a la seleccionada
  for (var i = num; i < stars.length; i++) {
    stars[i].classList.remove("highlight");
  }

  starSelected = true;
  Cantidad = num;
}

function submitFeedback() {
  //Guardar comentario
  const commentText = document.getElementById("commentText").value;
  //Crear alerta
  var alerta = document.createElement("div");
  alerta.setAttribute("role", "alert");

  if (starSelected && commentText) {
    alerta.classList.add("alert", "alert-success");
    alerta.textContent =
      `Gracias por tu calificacion de ` +
      Cantidad +
      ` estrellas y tu comentario.`;
  } else {
    if (starSelected) {
      alerta.classList.add("alert", "alert-success");
      alerta.textContent =
        `Gracias por tu calificación de ` + Cantidad + ` estrellas.`;
    } else {
      alerta.classList.add("alert", "alert-danger");
      alerta.textContent = "Por favor selecciona una calificación.";
    }
  }
  document.body.appendChild(alerta);
  alerta.scrollIntoView();
  // Esperar 2s
  setTimeout(function () {
    location.reload();
  }, 2000);
}

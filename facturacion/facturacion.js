function confirmarCompra() {
  document.getElementById("payment-method").style.display = "block";
  document.getElementById("payment-method").scrollIntoView();
}

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function realizarPago() {
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var retiro = document.getElementById("retiro").value;
  var metodo_pago = document.getElementsByName("payment");
  var metodo_selecionado = false;

  // Verificar si al menos uno está seleccionado
  for (var i = 0; i < metodo_pago.length; i++) {
    if (metodo_pago[i].checked) {
      metodo_selecionado = true;
      console.log("true");
    }
  }

  if (
    nombre.trim() != "" &&
    correo.trim() != "" &&
    tel.trim() != "" &&
    retiro.trim() != "" &&
    metodo_selecionado
  ) {
    // Generar dos números aleatorios de 3 dígitos
    var parte1 = generarNumeroAleatorio(100, 999);
    var parte2 = generarNumeroAleatorio(100, 999); // Entre 100 y 999

    // Mostrar el mensaje con el código generado
    alert(
      "Pago realizado con éxito! Su código para retirar: " +
        parte1 +
        "-" +
        parte2
    );

    // Redirigir
    window.location.href = "../menu/Menu.html";
  } else {
    alert("Todos los campos son obligatorios.");
  }

  // Aqui iria la logica para procesar el pago
}

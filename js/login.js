const btnIniciar = document.getElementById("btnIniciar");

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if ((usuario === "admin" && contrasena === "admin") || 1==1) {
    window.location.href = "inicio.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        iniciarSesion();
    }
});

btnIniciar.addEventListener("click", iniciarSesion);
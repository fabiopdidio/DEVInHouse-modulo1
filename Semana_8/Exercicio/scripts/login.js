import { usuarios } from '../constantes/usuarios.js'

const form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!emailInput.value || !passwordInput.value) {
    if (!emailInput.value) {
      emailInput.style.border = "1px solid red";
    }
    if (!passwordInput.value) {
      passwordInput.style.border = "1px solid red";
    }
  } else {
    const usuarioEncontrado = usuarios.find(function (usuario) {
      return (
        usuario.email === emailInput.value &&
        usuario.senha === passwordInput.value
      );
    });

    if (usuarioEncontrado) {
      window.location.href = "../home.html";
    } else {
      alert("Email ou senha inválidos");
    }
  }
});

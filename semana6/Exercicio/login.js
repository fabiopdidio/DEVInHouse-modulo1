const usuarios = [
  {
    email: "joao@gmail.com",
    nome: "João Silva",
    senha: "123456",
  },
  {
    email: "maria@hotmail.com",
    nome: "Maria Souza",
    senha: "senha123",
  },
  {
    email: "pedro@yahoo.com",
    nome: "Pedro Oliveira",
    senha: "abc123",
  },
  {
    email: "laura@gmail.com",
    nome: "Laura Santos",
    senha: "qwerty",
  },
  {
    email: "gabriel@yahoo.com",
    nome: "Gabriel Costa",
    senha: "senha12345",
  },
];

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
      window.location.href = "home.html";
    } else {
      alert("Email ou senha inválidos");
    }
  }
});

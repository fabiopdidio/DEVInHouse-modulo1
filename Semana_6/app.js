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

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    if (!emailInput.value || !passwordInput.value) {
      if (!emailInput.value) {
        emailInput.style.border = "1px solid red";
      }
      if (!passwordInput.value) {
        passwordInput.style.border = "1px solid red";
      }
      event.preventDefault();

    } else {
      const usuarioEncontrado = usuarios.find(function (usuario) {
        return (
          usuario.email === emailInput.value &&
          usuario.senha === passwordInput.value
        );
      });

      if (usuarioEncontrado) {
        // Usuário encontrado, realizar o login
        window.location.href = "reserva.html";
      } else {
        // Usuário não encontrado, exibir mensagem de erro
        alert("Email ou senha inválidos");
      }
    }
  });

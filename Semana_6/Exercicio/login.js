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
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput.value || !passwordInput.value) {
      if (!emailInput.value) {
        emailInput.style.border = "1px solid red"; // Adiciona borda vermelha
      }
      if (!passwordInput.value) {
        passwordInput.style.border = "1px solid red"; // Adiciona borda vermelha
      }
      event.preventDefault();
    } else {
      const usuarioEncontrado = usuarios.find(function (usuario) {
        // Procura se está na const usuarios
        return (
          usuario.email === emailInput.value &&
          usuario.senha === passwordInput.value
        );
      });

      if (usuarioEncontrado) {
        window.location.href = "./home.html"; // Se usuário e senha estiverem corretos direciona para home
      } else {
        alert("Email ou senha inválidos"); // Se errar dados, um alert aparece
      }
    }
  });

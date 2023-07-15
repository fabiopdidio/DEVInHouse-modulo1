import Usuario from "./Usuario.js";

const formLogin = document.getElementById("form-login");
const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const pMensagem = document.getElementById("mensagem");

const usuarios = [
  // cria usuários
  new Usuario("Fabio", "fabio@dih.br", "123"),
  new Usuario("Didio", "didio@dih.br", "321"),
];

console.log(usuarios);

function realizaLogin(evento) {
  evento.preventDefault(); // prevenir o comportamento de recarregar tela
  const email = campoEmail.value;
  const senha = campoSenha.value;

  const usuario = usuarios.find((usuario) => {
    return usuario.email === email;
  });

  if (usuario && usuario.autenticar(email, senha)) {
    pMensagem.innerHTML = `Olá, ${usuario.nome}!`;
    campoEmail.value = "";
    campoSenha.value = "";
  } else {
    pMensagem.innerHTML = "Credenciais inválidas!";
  }
}
formLogin.addEventListener("submit", realizaLogin);

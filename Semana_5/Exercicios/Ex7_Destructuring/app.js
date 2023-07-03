const pessoa = {
  nome: "Fábio",
  idade: 25,
  profissao: "nutricionista",
};

function montaMensagem(pessoa) {
  const { nome, idade, profissao } = pessoa;
  return `Este é ${nome}, tem ${idade} e é ${profissao}.`;
}
const mensagem = montaMensagem(pessoa);
console.log(mensagem);

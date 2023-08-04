<!--
  PASSOS PARA CRIAR UM COMPONENTE:
  - 1 [x] - crie um arquivo dentro da pasta components
  - 2 [x] - dê o nome ao arquivo usando PascalCase
    Obs: PascalCase significa que as primeiras letras
    sempre serão maiúsculas.
  - 3 [x] - Escreva a estrutura base do arquivo Vue (Single File Component
  - template | script | style)
  - 4* [x] - Se for usar props, defina o array de props
    - 4.1* - [x] Defina onde as props devem ser utilizadas
  - 5 [x] - importe o componente no local que será utilizado
    import NomeDoComponente from "./components/NomeDoComponente.vue"
  - 6 [x] - Registre o componente na propriedade components:
    components: { // esse fica dentro do export default
      NomeDoComponente
    }
    6.1 [x] - Adicione o componente no template no arquivo onde ele foi importado
  - 7* [x] - Se usou props, passe os valores das props para serem utilizados
-->

<template>
  <div>
    <h1>Título: {{ titulo }}</h1>
    <span>Duração: {{ duracao }} horas</span><br />
    <span>Vagas: {{ vagas }}</span>
  </div>
</template>

<script>
export default {
  props: ["titulo", "duracao", "vagas"],
};
</script>

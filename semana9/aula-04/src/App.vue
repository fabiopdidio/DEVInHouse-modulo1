<template>
  <div>
    <img src="" alt="" width="" height="" />
    <h1>Lista de cursos</h1>
    <!-- O v-bind (:) é uma diretiva que nos permite
    passar valores Javascript dentro das props -->
    <CursoItem
      v-for="(curso, index) in listaCursos"
      :key="index"
      :titulo="curso.titulo"
      :duracao="curso.duracao"
      :vagas="curso.vagas"
    />
  </div>
</template>

<script>
import CursoItem from "./components/CursoItem.vue";
export default {
  components: {
    CursoItem,
  },
  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS",
          duracao: 30,
          vagas: 40,
        },
        {
          titulo: "Javascript",
          duracao: 20,
          vagas: 40,
        },
        {
          titulo: "PHP",
          duracao: 20,
          vagas: 40,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>

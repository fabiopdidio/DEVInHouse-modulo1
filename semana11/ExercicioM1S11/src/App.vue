<template>
  <Header /> <!--Deixa Header como componente fixo em todas páginas-->
  <router-view></router-view> <!--Parte da página que será alterada-->
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped></style>

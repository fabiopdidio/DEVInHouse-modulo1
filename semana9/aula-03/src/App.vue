<template>
  <!-- utilizando o componente -->
  <Card>
    <template v-slot:header>
      <h1>Titulo do meu card</h1>
    </template>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, rem
      harum debitis animi ducimus expedita numquam autem nostrum, voluptatum
      suscipit dolorum unde vel eaque dolorem doloremque sunt. Ea, sit dicta.
    </p>
    <template #footer>
      <h6>Created by Fábio Didio</h6>
    </template>
  </Card>
</template>

<script>
// importando componente
import Card from "./components/Card.vue";

export default {
  // registrando componente
  components: {
    Card,
  },
};
</script>

<style scoped></style>

<template>
  <header class="header">
    <router-link to="/" class="logo-link">
      <img
        class="logo"
        src="https://d6ce0no7ktiq.cloudfront.net/images/preview/2020/03/03/design-61468/template-sticker-600x600.png"
        alt="Logo da Empresa"
      />
      <span class="company-name">Farmácia Z</span>
    </router-link>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 2em;
  width: 100vw;
  background-color: #e2e2e2;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.company-name {
  font-size: 2em;
  font-weight: bold;
  color: black;
}
</style>

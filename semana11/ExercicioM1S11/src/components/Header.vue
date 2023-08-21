<template>
  <header class="header">
    <router-link to="/">
      <span class="logo-text"> 💊 FARMACIA Z</span>
    </router-link>
  </header>
</template>

<script>
import {RouterLink} from "vue-router"

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.header {
  padding: 10px 2em;
  widows: 100vw;
  height: 60px;
  background-color: #E2E2E2;
}

a {
  text-decoration: none;
  font-size: 1.5em;
  color: black;
  font-weight: bold;
}
</style>
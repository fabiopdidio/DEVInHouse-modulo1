<template>
    <div>
      <input>Nome do medicamento: {{ nome }} </input>
      <input>Nome do laboratorio: {{ laboratorio }} </input>
      <input>Preço: {{ preço }} </input>
    </div>
  </template>
  
  <script>
  export default {
    props: ['nome', 'laboratorio', 'preço']
  }
  </script>

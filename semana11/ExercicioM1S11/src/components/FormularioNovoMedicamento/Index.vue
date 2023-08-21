<template>
  <h2 class="titulo-formulario">Formulário de Cadastro de medicamentos</h2>
  <v-form ref="form" class="d-flex mt-5">
    <v-text-field
      label="Nome do medicamento"
      class="w-25 px-2"
      type="text"
      variant="outlined"
      v-model="medicamento"
      :rules="[(v) => !!v || 'O nome é obrigatório!']"
      required
    /> 

    <v-text-field
      label="Nome do laboratório"
      class="w-25 px-2"
      type="text"
      variant="outlined"
      v-model="laboratorio"
      :rules="[(v) => !!v || 'O nome do laboratório é obrigatório!']"
      required
    />

    <v-text-field
      label="Preço"
      type="number"
      class="w-25 px-2"
      variant="outlined"
      v-model="preco"
      :rules="[(v) => !!v || 'O preço é obrigatório!']"
      required
    />

    <v-btn
      color="primary"
      class="mt-1 me-2 px-2"
      size="large"
      variant="elevated"
      @click="AdicionarMedicamento"
      >Cadastrar</v-btn
    >
  </v-form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default {
  data() {
    return {
      medicamento: "",
      laboratorio: "",
      preco: "",
    };
  },
  methods: {
    async AdicionarMedicamento() {
        console.log("Método AdicionarMedicamento chamado.");

      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        return;
      }

      const novoMedicamento = {
        id: uuidv4(),
        nome: this.medicamento,
        laboratorio: this.laboratorio,
        preco: this.preco,
        favorito: false,
      };

      try {
        await axios.post(
          "http://localhost:50001/medicamentos",
          novoMedicamento
        );
      } catch (erro) {
        console.log(erro);
      }
    },
  },
};
</script>

<style scoped>
.titulo-formulario {
  margin-top: 20px; 
  margin-bottom: 10px; 
  text-align: center; 
}
</style>

<template>
  <div class="ma-5 d-flex justify-end">
    <router-link to="/novo-medicamento">
      <v-btn
        title="Adicionar novo medicamento"
        variant="elevated"
        color="primary"
        @click="adicionarMedicamento"
        >Adicionar medicamento</v-btn
      >
      <!--Botão para adicionar medicamento e direcionar para outra página-->
    </router-link>
  </div>
  <div class="d-flex mx-5">
    <CardMedicamento
      v-for="medicamento in listaMedicamentos"
      :key="medicamento.id"
      @favoritar="FavoritarMedicamento"
      :nome="medicamento.nome"
      :laboratorio="medicamento.laboratorio"
      :preco="medicamento.preco"
      :id="medicamento.id"
      :favorito="medicamento.favorito"
    />
  </div>
</template>

<script>
import CardMedicamento from "../components/CardMedicamento/index.vue";
import axios from "axios";
export default {
  components: {
    CardMedicamento,
  },
  data() {
    return {
      listaMedicamentos: [],
    };
  },
  methods: {
    async FavoritarMedicamento(id) {
      // editar o medicamento e marcar como favorito
      // o filter retorna sempre um array, por isso vamos sempre usar a posição 0
      let medicamento = this.listaMedicamentos.filter((item) => item.id == id);

      if (!!medicamento[0]) {
        try {
          medicamento[0].favorito = !medicamento[0].favorito;

          var result = await axios.put(
            `http://localhost:50001/medicamentos/${id}`,
            medicamento[0]
          );
        } catch (erro) {
          console.log(erro);
        }
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:50001/medicamentos")
      .then((res) => (this.listaMedicamentos = res.data))
      .catch((erro) => console.log(erro));
  },
};
</script>

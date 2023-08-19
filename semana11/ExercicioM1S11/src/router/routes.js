import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue"; // Iporta aqui as páginas
import FormularioNovoMedicamento from "../pages/FormMedicamentos.vue";

export const routes = createRouter({ // exportar para ficar acessível
  history: createWebHashHistory(),
  routes: [ // Configuração das rotas
    {
      path: "/", // path = caminho ("/" é a página inicial)
      name: "home",
      component: Home,
    },
    {
      path: "/novo-medicamento",
      name: "novo-medicamento",
      component: FormularioNovoMedicamento,
    },
  ],
});

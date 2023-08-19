import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue"
import FormMedicamento from "../pages/FormMedicamentos.vue"

export const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', // Define caminho da página inicial
      name: 'home',
      component: Home
    },
    {
      path: '/novo-medicamento', // Define caminho para novos medicamentos
      name: 'novo-medicamento',
      component: FormMedicamento
    }
  ]
})
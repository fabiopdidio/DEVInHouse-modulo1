import "./assets/main.css";

// Importa Vue
import { createApp } from "vue";
import App from "./App.vue";

// rotas
import { routes } from "@/router/routes.js";

// Configuração do vuetify
import "vuetify/styles"; // Importa estilos
import "@mdi/font/css/materialdesignicons.css"; // Importa ícones do mdi
import { createVuetify } from "vuetify";
import * as components from "vuetify/components"; // Importa todos componentes do vuetify
import * as directives from "vuetify/directives"; // Importa todas diretivas do vuetify

const vuetify = createVuetify({
  // Cria uma variável com todas importações
  components,
  directives,
  icons: { defaultSet: "mdi" },
});

createApp(App).vue(routes).use(vuetify).mount("#app");

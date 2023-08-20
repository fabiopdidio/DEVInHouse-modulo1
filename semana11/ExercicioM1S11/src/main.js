import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Configuração do Routes
import { routes } from "@/router/routes.js";

// Configuração do Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

// Tem que ficar nessa ordem
createApp(App).use(routes).use(vuetify).mount("#app");

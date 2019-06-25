import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerInterceptor } from "@/utils/net";

Vue.config.productionTip = false;

registerInterceptor();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

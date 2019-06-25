import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: process.env.VUE_APP_MODULE
    ? [
        ...require("./views/misc").default,
        ...require(`./views/${process.env.VUE_APP_MODULE}`).default
      ]
    : [
        ...require("./views/misc").default,
        ...require("./views/business-a").default,
        ...require("./views/business-b").default,
        ...require("./views/business-c").default,
        ...require("./views/douban-movies").default
      ]
});

import Vue from "vue";
import App from "../app.vue";
// import router from "./router";
// import store from "./store";
import vuetify from "./plugins/vuetify";
// import i18n from "./plugins/i18n";
// import moment from "moment";

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    // i18n,
    vuetify,
    // router,
    // store,
    // moment,
    render: h => h(App)
}).$mount("#app");

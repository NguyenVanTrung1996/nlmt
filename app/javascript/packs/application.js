import Vue from "vue";
import App from "../app.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

// import i18n from "./plugins/i18n";
// import moment from "moment";

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        store,
        vuetify,
        router,
        render: h => h(App),
    })
})


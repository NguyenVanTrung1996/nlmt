import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdi"
    }
};

export default new Vuetify(opts);

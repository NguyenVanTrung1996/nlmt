import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Create Modules object
const modules = {};

// Dynamically import and namespace Vuex modules
const moduleNames = [
    "slides",
    "categories",
    "products",
    "project-categories"
];

moduleNames.forEach(name => {
    let module = require(`./modules/${name}`);

    modules[name] = {
        namespaced: true,
        ...module.default
    };
});

const store = new Vuex.Store({ modules });

export default store;

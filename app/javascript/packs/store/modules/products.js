const state = {
    products: [
        { id: 1, name: "Inverter 1", image: "inverter.jpg" },
        { id: 2, name: "Inverter 2", image: "inverter.jpg" },
        { id: 3, name: "Inverter 3", image: "inverter.jpg" },
        { id: 4, name: "Inverter 4", image: "inverter.jpg" },
        { id: 5, name: "Inverter 5", image: "inverter.jpg" },
        { id: 6, name: "Inverter 6", image: "inverter.jpg" }
    ],
    categories: {
        "1": [
            { id: 1, name: "Inverter 1", image: "inverter.jpg" },
            { id: 2, name: "Inverter 2", image: "inverter.jpg" },
            { id: 3, name: "Inverter 3", image: "inverter.jpg" },
            { id: 4, name: "Inverter 4", image: "inverter.jpg" },
            { id: 5, name: "Inverter 5", image: "inverter.jpg" },
            { id: 6, name: "Inverter 6", image: "inverter.jpg" }
        ],
        "2": [
            { id: 7, name: "pin 1", image: "pin.jpg" },
            { id: 8, name: "pin 2", image: "pin.jpg" },
            { id: 9, name: "pin 3", image: "pin.jpg" },
            { id: 10, name: "pin 4", image: "pin.jpg" },
            { id: 11, name: "pin 5", image: "pin.jpg" },
            { id: 12, name: "pin 6", image: "pin.jpg" }
        ],
        "3": [
            { id: 13, name: "light 1", image: "light.jpg" },
            { id: 14, name: "light 2", image: "light.jpg" },
            { id: 15, name: "light 3", image: "light.jpg" },
            { id: 16, name: "light 4", image: "light.jpg" },
            { id: 17, name: "light 5", image: "light.jpg" },
            { id: 18, name: "light 6", image: "light.jpg" }
        ]
    }
}

const getters = {
    getProducts(state) {
        return state.products
    }
}

const mutations = {
    getProductsByCategoryId(state, categoryId) {
        state.products = categories[categoryId]
    }
}

const actions = {
    getProductsByCategoryId({ commit }, CategoryId) {
        commit('getProductsByCategoryId', CategoryId)
    }
}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}

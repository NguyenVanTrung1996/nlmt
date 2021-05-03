const state = {
    slides: ["slide_1.jpg", "slide_2.jpg", "slide_3.jpg", "slide_4.jpg", "slide_5.jpg"]
}

const getters = {
    getSlides(state) {
        return state.slides
    }
}

const mutations = {

}

const actions = {

}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}

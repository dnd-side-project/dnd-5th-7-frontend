const state={
    isSlide = false
}

const actions = {
    changeSlide({commit},value){
        commit(value)
    }
}

const mutations = {
    changeSlide(state){
        state.isSlide =!isSlide
    }
}
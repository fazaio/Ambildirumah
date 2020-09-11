export const state = () => ({
  response: '',
  loading: false
})

export const actions = {
  changeStatus({ commit }) {
    commit('failed')
    commit('loading', true)
  }
}

export const mutations = {
  response(state, payload) {
    state.response = payload
  },
  loading(state, payload) {
    state.loading = payload
  }
}

export const getters = {
  response(state) {
    return state.response
  },
  loading(state) {
    return state.loading
  }
}

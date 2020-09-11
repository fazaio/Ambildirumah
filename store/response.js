export const state = () => ({
  response: 'tes',
  loading: false
})

export const actions = {
  changeStatus({ commit }) {
    commit('failed')
    commit('loading', true)
  }
}

export const mutations = {
  success(state) {
    state.response = 'sucess'
  },
  failed(state) {
    state.response = 'failed'
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

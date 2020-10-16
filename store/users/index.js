export const actions = {
  signUp({ commit }, payload) {
    commit('response/loading', true, { root: true })
    commit('response/response', payload, { root: true })
  }
}

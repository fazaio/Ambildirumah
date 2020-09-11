import axios from '~/plugins/axios'

export const actions = {
  getData({ commit }) {
    commit('response/loading', true, { root: true })
    axios
      .get('/home')
      .then((res) => {
        if (res.data) {
          commit('setData', res.data)
          commit('response/loading', false, { root: true })
        } else {
          commit('response/response', 'gagal mengambil data!', { root: true })
          commit('response/loading', false, { root: true })
        }
      })
      .catch((e) => {
        commit('setData', e)
        commit('response/loading', false, { root: true })
      })
  }
}

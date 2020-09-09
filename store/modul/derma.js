import { fetchDerma } from '../action.type'
import axios from '~/plugins/axios'

export default {
  getters: {},
  action: {
    [fetchDerma]({ commit }, payload) {
      axios.get('home').then((res) => {
        // console.log(res.data)
      })
    }
  }
}

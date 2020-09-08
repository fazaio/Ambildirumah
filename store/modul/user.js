/* eslint-disable no-console */
import axios from '@/plugins/axios'
import { signUp } from '../action.type'
import { setResponse } from '../mutation.type'

export default {
  state: {
    data: []
  },
  actions: {
    [signUp]({ commit }, payload) {
      commit(setResponse, '')
      commit(setResponse, 'Loading')
      axios.post('/account/register', { payload }).then((res) => {
        console.log(res)
      })
    }
  }
}

import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import { createStore } from 'vuex'

export default createStore({
  state,
  mutations,
  getters,
})

import Vue from 'vue'
import Vuex from 'vuex'
import * as sysUsers from './modules/sysUsers'
import * as users from './modules/users'
import * as shop from './modules/shop'
import * as order from './modules/order'
import { globalConst as native } from 'lib/const'

Vue.use(Vuex)

export default new Vuex.Store({
  /* actions,*/
  state: {
    userInfo: {name: 'test'}
  },
  actions: {},
  mutations: {
    setCredential (state, nowCredential) {
      state.credential = nowCredential
    },
  },
  modules: {sysUsers, users, shop, order}
})

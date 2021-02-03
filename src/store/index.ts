import Vue from 'vue'
import Vuex from 'vuex'
import graphDataStore from './modules/graphDataStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    graphDataStore
  },
  state: {
    toggleSidebar: false
  },
  mutations: {
  },
  actions: {
  },
})

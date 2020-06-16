import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state: {
      count: 10
    },

    mutations: {
      addCount (state) {
        state.count += 1
      },

      init (state, count) {
        state.count = count
      }
    },

    actions: {
      addCount ({commit}) {
        commit('addCount')
      },

      asyncCount ({commit}) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('init', Math.random() * 1000)
            resolve()
          }, 1000)
        })
      }
    }
  })
} 


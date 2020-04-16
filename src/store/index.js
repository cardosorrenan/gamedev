import Vue from 'vue';
import Vuex from 'vuex'; 
import axios from 'axios'
import { url_api } from './api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({    
  state: {        
    turma: []
  },

  actions: {      
    async addTurma({ commit }, turma) {        
      const response = await axios.get(`http://${url_api}/turmas?periodo_eq=${turma}`)
      commit('setTurma', response.data)
    }    
  },

  mutations: {        
    setTurma: (state, payload) => state.turma = payload
  },

  plugins: [createPersistedState()]
})
import Vue from 'vue';
import Vuex from 'vuex'; 
import axios from 'axios'
import { url_api } from './api'
import createPersistedState from 'vuex-persistedstate'
import moment from 'moment'

Vue.use(Vuex);

export const store = new Vuex.Store({    
  state: {      
    turma: [],
  },

  getters: {
    periodo: state => state.turma[0].periodo,

    alunos: state => state.turma[0].alunos.map(a => 
      Object.assign(
        { 
          'nome': a.nome,
          'faltas': a.faltas,
          'certificado': !!a.certificado.length ? a.certificado[0].url : false 
        })
    ),

    colaboradores: state => state.turma[0].colaboradores.map(c => 
      Object.assign(
        { 
          'Nome': c.Nome,
          'Email': c.Email
        })
    ),
    
    conteudos: state => state.turma[0].conteudos.map(c => 
      Object.assign(
        { 
          'Aula': c.aula,
          'Data/Horário': moment(c.horario).format('DD/MM - h:mm a'),
          'Conteúdo': c.conteudo
        })
    ),

    materiais: state => state.turma[0].materiais.map(m => 
      Object.assign(
        { 
          'descricao': m.descricao,
          'arquivo': !!m.arquivo.length ? m.arquivo[0].url : false 
        }
      )
    ),

    projetos: state => state.turma[0].projetos.map(p => 
      Object.assign(
        { 
          'descricao': p.descricao,
          'arquivo': !!p.arquivo.length ? p.arquivo[0].url : false 
        })
    ),

    projetos_alunos: state => state.turma[0].projetos_alunos.map(p => 
      Object.assign(
        { 
          'descricao': p.descricao,
          'arquivo': !!p.arquivo.length ? p.arquivo[0].url : false 
        })
    ),

    slides: state => state.turma[0].slides.map(s => 
      Object.assign(
        { 
          'descricao': s.descricao,
          'arquivo': !!s.arquivo.length ? s.arquivo[0].url : false 
        }
      )
    )
  },
  
  actions: {      
    async addTurma({ commit }, turma) { 
      try {
        await axios.get(`${url_api}/turmas?periodo_eq=${turma}`)
        .then(response => {
          commit('setTurma', response.data)
        });
      } catch (e) {
        console.error("Servidor não está respondendo...")
      }
    }    
  },

  mutations: {        
    setTurma: (state, payload) => state.turma = payload,
  },

  plugins: [createPersistedState()]
})
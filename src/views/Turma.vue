<template>
  <div v-if='loading'>
    <div class="loading">
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
      <p class="text-loading">Conectando com o servidor...</p>
    </div>
    <!--div class="loading" v-else>
      <div class="img-error" />
      <p class="text-loading">Servidor não está respondendo</p>
      <p class="text-loading">Desculpe o transtorno</p>
      <router-link class="return-btn" to="/">
        <i class="return-icon fas fa-arrow-left" />  
        Voltar
      </router-link>
    </div-->
  </div>
  <div v-else>
    <title-card title="GAMEDEV | Uma Introdução à Programação" :lead="'Turma ' + periodo" />
    <div class="box">
      <div class="box-return">
        <router-link class="return-btn" to="/">
          <i class="return-icon fas fa-arrow-left" />  
          Voltar
        </router-link>
      </div>
      <div class="box-content">
        <router-link class="menu-btn" to="/material">
          Material
        </router-link>
        <router-link class="menu-btn" to="/cronograma">
          Cronograma
        </router-link>
        <router-link class="menu-btn" to="/participantes">
          Participantes
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import TitleCard from '../components/TitleCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Turma',
  components: {
    'title-card': TitleCard,
  },
  data () {
    return {
      loading: true,
    }
  },
  created() {
    const turma = this.$route.params.turma
    if (!!turma) {
      this.$store.dispatch('addTurma', turma)
    } else {
      this.loading = false
    }
  },
  computed: {
    ...mapGetters([
      'periodo',
    ]),
  },
  watch:{
    '$store.state.turma': {
      handler: function(newValue) {
        if (!!newValue) {
          this.loading = false
        }
      },
    },
  }
}
</script>
<style scoped>
  .loading {
    display: flex;
    height: 75vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-loading {
    margin-top: 15px;
    font-size: 12px;
    font-weight: 500;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .box-return {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .menu-btn {
    background-color: #283040;
    border: 0px;
    height: 40px;
    color: #FFF !important;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    border-radius: 50em;
    padding: .75rem 1.25rem;
    width: 170px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    text-decoration: none !important;
    box-shadow: 2px 2px #000;
    cursor: pointer;
    margin: 15px;
  }
  .return-btn {
    background-color: #283040;
    border: 0px;
    height: 40px;
    color: #FFF !important;
    font-family: 'Montserrat Alternates', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50em;
    padding: .75rem 1.25rem;
    width: 90px;
    padding: 0px 15px 0px 15px;
    font-size: 9pt;
    font-weight: 300;
    text-decoration: none !important;
    box-shadow: 2px 2px #000;
    cursor: pointer;
    margin: 15px;
  }
  .return-icon {
    margin-right: 10px;
  }
</style>

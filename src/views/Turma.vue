<template>
  <div>
   
    <title-card title="GAMEDEV | Uma Introdução à Programação" :lead="'Turma ' + turma[0].periodo" />
    <div class="box">
      <div class="box-return">
        <button class="return-btn" @click='goTo("home")'>
          <i class="return-icon fas fa-arrow-left" />  
          Voltar
        </button>
      </div>
      <div class="box-content">
        <button class="menu-btn" @click='goTo("material")'>
          Material
        </button>
        <button class="menu-btn" @click='goTo("cronograma")'>
          Cronograma
        </button>
        <button class="menu-btn" @click='goTo("participantes")'>
          Participantes
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import TitleCard from '../components/TitleCard'

export default {
  name: 'Turma',
  components: {
    'title-card': TitleCard,
  },
  methods: {        
    goTo(page) {
      this.$router.push({ name: page })   
    }  
  },
  computed: {
    turma () {
      return this.$store.state.turma
    }
  }
}
</script>

<style scoped>
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
    margin-left: auto;
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

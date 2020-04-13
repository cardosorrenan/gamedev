<template>
  <div>
   
    <title-card title="GAMEDEV | Uma Introdução à Programação" :lead="'Turma ' + turma[0].periodo" />
    <div class="box">
      <div class="box-return">
        <button class="return-btn" @click='goTo("home")'>Voltar</button>
      </div>
      <div class="box-content">
        <button class="menu-btn" @click='goTo("material")'>Material</button>
        <button class="menu-btn" @click='goTo("cronograma")'>Cronograma</button>
        <button class="menu-btn" @click='goTo("participantes")'>Participantes</button>
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
  @media (max-width: 650px) {
    .box-content {
      flex-direction: column;
      height: 30vh;
      justify-content: space-evenly;
    }
  }
</style>

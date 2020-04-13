<template>
  <div>
    <title-card title='GAMEDEV | Uma Introdução à Programação'/>
    <div class="main-buttons">
      <button class="menu-btn" @click='changeTurma("2019.2")'>Turma 2019.2</button>
      <button class="menu-btn" @click='changeTurma("2020.1")'>Turma 2020.1</button>
    </div>
  </div>
</template>
<script>

import TitleCard from '../components/TitleCard'

export default {
  name: 'Home',
  components: {
    'title-card': TitleCard,
  },
  data () {
    return {
      turma: ""
    }
  },
  methods: {
    changeTurma(str) {
      this.$store.dispatch('addTurma', str); 
      this.$router.push({ name: 'turma' })   
    }
  }
}
</script>
<template>
  <div>
    <title-card title='GAMEDEV | Uma Introdução à Programação'/>
    <div class="main-buttons">
      <router-link class="menu-btn" :to="{ name: 'turma', params: { turma: '2019.2' } }">
        Turma 2019.2
      </router-link>
      <router-link class="menu-btn" :to="{ name: 'turma', params: { turma: '2020.1' } }">
        Turma 2020.1
      </router-link>
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
  
}
</script>
<style scoped>
  .main-buttons {
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
    width: 150px !important;
    font-weight: 300;
    text-decoration: none !important;
    box-shadow: 2px 2px #000;
    cursor: pointer;
    margin: 15px;
  }
</style>
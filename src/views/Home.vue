<template>
  <div>
    <title-card title='GAMEDEV | Uma Introdução à Programação'/>
    <div class="main-buttons">
      <button-navigate title='Turma 2019.2' to="turma"/>
      <button-navigate title='Turma 2020.1' to="turma"/>
    </div>
  </div>
</template>

<script>
import TitleCard from '../components/TitleCard'
import Button from '../components/ButtonNavigate'

export default {
  name: 'Home',
  components: {
    'title-card': TitleCard,
    'button-navigate': Button
  }
}
</script>

<style scoped>
  .main-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
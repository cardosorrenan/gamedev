<template>
  <div>
    <title-card title="GAMEDEV | Uma Introdução à Programação" :lead="title" />
    <div class="box">
      <div class="box-return">
        <button-return />
      </div>
      <div class="box-menu">
        <button-navigate title="Material" />
        <button-navigate title="Cronograma" />
        <button-navigate title="Participantes" />
      </div>
    </div>
  </div>
</template>

<script>

import TitleCard from '../components/TitleCard'
import Navigate from '../components/ButtonNavigate'
import Return from '../components/ButtonReturn'

export default {
  name: 'Turma',
  components: {
    'title-card': TitleCard,
    'button-navigate': Navigate,
    'button-return': Return,
  },
  data () {
    return {
      title: ""
    }
  },
  mounted () {
    this.title = this.$route.params.title
  }
}
</script>

<style scoped>
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .box-return {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;
  }
  @media (max-width: 650px) {
    .box-menu {
      flex-direction: column;
    }
  }
</style>

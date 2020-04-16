<template>
  <div>
    <div class="box mt-5">
      <div class="box-return">
        <button class="return-btn" @click='goTo("turma")'>
          <i class="return-icon fas fa-arrow-left" />  
          Voltar
        </button>
      </div>
      <div class="box-content mt-5">
        <p class="table-title">Cronograma</p>
        <b-table class="table" striped hover :fields="cronogramaFields" :items="conteudos"/>
      </div>
    </div>

  </div>
</template>
<script>

import moment from 'moment'

export default {
  name: 'Cronograma',
  data () {
    return {
      cronogramaFields: [
        'Aula',
        'Data/Horário',
        'Conteúdo'
      ],
    }
  },
  methods: {        
    goTo(page) {
      this.$router.push({ name: page })   
    }  
  },
  computed: {
    conteudos () {
      const conteudos = this.$store.state.turma[0].conteudos
      return conteudos.map(c => 
        Object.assign(
          { 
            'Aula': c.aula,
            'Data/Horário': moment(c.horario).format('DD/MM - h:mm a'),
            'Conteúdo': c.conteudo
          })
      )
    },
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
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    padding-bottom: 50px;
  }
  hr {
    margin: 15px;
    padding: 0;
    border: 1px solid #283040;
    width: 65vw;
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
  .table {
    width: 70%;
    font-size: 9pt;
    text-align: center;
    border-radius: 7px;
    border: 1px solid transparent;
    background-color: #e2e2e2;
    color: #283040;
  }
  @media (max-width: 670px) {
    .table {
      width: 100%;
    }
  }
  .table-title {
    color: #FFF;
    font-weight: 700;
    font-size: 14pt;
  }

</style>


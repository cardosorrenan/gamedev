<template>
  <div>
    <div class="box mt-5">
      <router-link class="return-btn" to="/turma">
        <i class="return-icon fas fa-arrow-left" />  
        Voltar
      </router-link>
      <div class="box-content mt-5">
        <p class="table-title">Colaboradores</p>
        <b-table class="table" striped hover :fields="colaboradoresFields" :items="colaboradores"/>
        <hr>
        <p class="table-title">Turma {{periodo}}</p>
        <b-table class="table" striped hover :fields="alunosFields" :items="alunos">
          <template v-slot:cell(certificado)="data">
            <div v-if='data.item.certificado' >
              <a :href="data.item.certificado" target="_blank">
                <i class="icon fas fa-download" />
              </a>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Participantes',
  data () {
    return {
      url_api,
      colaboradoresFields: [
        'Nome',
        'Email',
      ],
      alunosFields: [
        'nome',
        'faltas',
        { key: 'certificado', label: 'Download' }
      ],
    }
  },
  computed: {
    ...mapGetters([
      'periodo',
      'colaboradores',
      'alunos'
    ]),
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
  .icon {
    color: #283040
  }
</style>
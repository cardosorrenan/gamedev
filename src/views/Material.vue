<template>
  <div>
    <div class="box mt-5">
      <div class="box-return">
        <router-link class="return-btn" to="/turma">
          <i class="return-icon fas fa-arrow-left" />  
          Voltar
        </router-link>
      </div>
      <div class="box-content mt-5">
        <p class="table-title">Materiais</p>
        <div v-for="item in materiais" :key="item.descricao">
          <a class="list-btn" @click="redirect(item.arquivo)">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <hr>
        <p class="table-title">Slides de Aula</p>
        <div v-for="item in slides" :key="item.descricao">
          <a class="list-btn" @click="redirect(item.arquivo)">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <hr>
        <p class="table-title">Projetos Desenvolvidos em Aula</p>
        <div v-for="item in projetos" :key="item.descricao">
          <a class="list-btn" @click="redirect(item.arquivo)">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <!-- <hr>
        <p class="table-title">Projetos Vencedores</p>
        <div v-for="item in projetos_alunos" :key="item.descricao">
          <a class="list-btn" @click="redirect(item.arquivo)">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>

import { url_api } from '../store/api'
import { mapGetters } from 'vuex'

export default {
  name: 'Material',
  data () {
    return {
      url_api
    }
  },
  methods: {
    redirect(url) {
      var upload_file = this.url_api + url
      window.open(upload_file, "_target");
    }
  },
  computed: {
    ...mapGetters([
      'materiais',
      'slides',
      'projetos',
      'projetos_alunos'
    ])
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
  .list-btn {
    background-color: #283040;
    height: 40px;
    color: #FFF !important;
    font-family: 'Montserrat Alternates', sans-serif;
    border-radius: 50em;
    width: auto;
    font-weight: 300;
    font-size: 10pt;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none !important;
    box-shadow: 2px 2px #000;
    cursor: pointer;
    margin: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 450px) {
    .list-btn {
      font-size: 8pt;
    }
  }
  .list-icon {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 40px;
    padding-right: 20px;
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
  .table-title {
    color: #FFF;
    font-weight: 700;
    font-size: 14pt;
  }
</style>
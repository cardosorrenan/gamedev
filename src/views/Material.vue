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
        <p class="table-title">Materiais</p>
        <div v-for="item in materiais" :key="item.descricao">
          <a class="list-btn" :href="url_api + item.arquivo">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <hr>
        <p class="table-title">Slides de Aula</p>
        <div v-for="item in slides" :key="item.descricao">
          <a class="list-btn" :href="url_api + item.arquivo">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <hr>
        <p class="table-title">Projetos Desenvolvidos em Aula</p>
        <div v-for="item in projetos" :key="item.descricao">
          <a class="list-btn" :href="url_api + item.arquivo">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
        <hr>
        <p class="table-title">Projetos Vencedores</p>
        <div v-for="item in projetosVencedores" :key="item.descricao">
          <a class="list-btn" :href="url_api + item.arquivo">
            <i class="list-icon fas fa-download" />
            {{ item.descricao }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { url_api } from '../store/api'

export default {
  name: 'Material',
  data () {
    return {
      url_api
    }
  },
  methods: {        
    goTo(page) {
      this.$router.push({ name: page })   
    }  
  },
  computed: {
    materiais () {
      const materiais = this.$store.state.turma[0].materiais
      return materiais.map(m => 
        Object.assign(
          { 
            'descricao': m.descricao,
            'arquivo': !!m.arquivo.length ? m.arquivo[0].url : false 
          })
      )
    },
    slides () {
      const slides = this.$store.state.turma[0].slides
      return slides.map(s => 
        Object.assign(
          { 
            'descricao': s.descricao,
            'arquivo': !!s.arquivo.length ? s.arquivo[0].url : false 
          })
      )
    },
    projetos () {
      const projetos = this.$store.state.turma[0].projetos
      return projetos.map(p => 
        Object.assign(
          { 
            'descricao': p.descricao,
            'arquivo': !!p.arquivo.length ? p.arquivo[0].url : false 
          })
      )
    },
    projetosVencedores () {
      const projetos = this.$store.state.turma[0].projetos_alunos
      return projetos.map(p => 
        Object.assign(
          { 
            'descricao': p.descricao,
            'arquivo': !!p.arquivo.length ? p.arquivo[0].url : false 
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
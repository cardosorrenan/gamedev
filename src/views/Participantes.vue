<template>
  <div>
    <div class="box mt-5">
      <div class="box-return">
         <button class="return-btn" @click='goTo("home")'>Voltar</button>
      </div>
      <div class="box-content mt-5">
        <p class="table-title">Colaboradores</p>
        <b-table class="table" striped hover :fields="colaboradoresFields" :items="colaboradores"/>
        <p class="table-title mt-5">{{turma}}</p>
        <b-table class="table" striped hover :fields="alunosFields" :items="detalhes">
          <template v-slot:cell(certificado)="data">
            <div v-if='data.item.certificado' >
              <a :href="url_api + data.item.certificado" target="_blank">
                <i class="icon fas fa-download fa-2x" />
              </a>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>
<script>

import TitleCard from '../components/TitleCard'
import { url_api } from '../store/api'

export default {
  props: ['title'],
  name: 'Participantes',
  components: {
    'title-card': TitleCard,
  },
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
        { key: 'certificado', label: 'Certificado' }
      ],
    }
  },
  methods: {        
    goTo(page) {
      this.$router.push({ name: page })   
    }  
  },
  computed: {
    colaboradores () {
      const colaboradores = this.$store.state.turma[0].colaboradores
      return colaboradores.map(c => 
        Object.assign(
          { 
            'Nome': c.Nome,
            'Email': c.Email
          })
      )
    },
    turma () {
      return `Turma ${this.$store.state.turma[0].periodo}`
    },
    detalhes () {
      const alunos = this.$store.state.turma[0].alunos
      return alunos.map(a => 
        Object.assign(
          { 
            'nome': a.nome,
            'faltas': a.faltas,
            'certificado': !!a.certificado.length ? a.certificado[0].url : false 
          })
      )
    }
  }
}
</script>
<style scoped>
  .icon {
    color: #283040
  }
  .box-content {
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    padding-bottom: 50px;
  }
  @media (max-width: 590px) {
    .table {
      width: 80%;
    }
  }
  @media (max-width: 390px) {
    .table {
      width: 100%;
      font-size: 7pt;
    }
  }
</style>
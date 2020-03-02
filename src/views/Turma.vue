<template>
  <div class="hello">
    <div class="container">
      <div class="presentation">
        <div class="shadow">
          <h3 class="title">Minicurso | Introdução à Programação</h3>
          <h3 class="title2">{{ this.turma }}</h3>
        </div>
      </div>
      <div class="class1">
        <div class="class2">
          <a class="btn-return" @click="home()">← Voltar</a>
        </div>
        <div class="class3">
          <a class="main-btn">Material</a>
          <a class="main-btn">Cronograma</a>
          <a class="main-btn">Participantes</a>
        </div>
      </div>   
      
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Turma',
  data: () => ({
    turma: ""
  }),
  mounted () {
    this.turma = this.$route.params.turma
  },
  methods: {
    home () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  font-family: 'Source Code Pro', monospace;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: #0774AF;
  margin: 2%;
}

@media (max-width: 550px) {
  .container {
    margin: 25px;
  }
}

.title {
  position: relative;
  top: 45%;
  font-size: 12pt;
  color: white;
  text-shadow: 1px 1px #283040;
  margin: 0px 10px 0px 10px;
}

.title2 {
  position: relative;
  top: 45%;
  font-size: 0.75em;
  color: black;
  opacity: 0.5;
  margin: 0px 10px 0px 10px;
}

.presentation {
  margin-top: 0px;
  height: 280px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  background-image: url('../assets/img-mucambo.jpg');
  background-position: 10% 40%;
  background-repeat: no-repeat;
  background-size: 170%;

}
.shadow {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgb(7,116,175);
  background: linear-gradient(0deg, rgba(7,116,175,1) 13%, rgba(4,3,3,0));
}
.main-btn {
  background-color: #283040;
  color: #ffffff;
  text-align: center;
  border-radius: 50em;
  padding: .75rem 1.25rem;
  width: 250px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 2px 2px black;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn-return{
  color: #0774AF;
  text-shadow: none; 
  background-color: #283040;
  color: #ffffff;
  border-radius: 50em;
  font-size: 10pt;
  padding: 1.4em 1.6em;
  border-radius: 50em;
  text-align: center;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 2px 2px black;
}

.class1 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

@media (max-width: 550px) {
  .class1 {
    flex-direction: column;
  }
  .btn-return {
    margin-bottom: 40px;
  }
  .main-btn {
    width: 60%;
  }
}

.class2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.class3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

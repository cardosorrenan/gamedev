<template>
  <div class="hello">
    <div class="container">
      <div class="presentation">
        <div class="shadow">
          <h3 class="title">Minicurso | Introdução à Programação</h3>
        </div>
      </div>      
      <a class="main-btn" href="pages/turma2019-2/index.html" data-type="page-transition">Turma 2019.2</a>
      <a class="main-btn" href="pages/turma2019-2/index.html" data-type="page-transition">Turma 2020.1</a>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  margin-top: 35px;
  border-radius: 50em;
  padding: .75rem 1.25rem;
  width: 150px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 2px 2px black;
}
</style>

<template>
  <div class="error404">
    <i class="fas fa-bug fa-3x"></i>
    <p class="text-error404">404: Página não encontrada</p>
    <router-link class="return-btn" to="/">
      <i class="return-icon fas fa-arrow-left" />  
      Voltar
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Error404',
}
</script>
<style scoped>
  .error404 {
    display: flex;
    height: 75vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-error404 {
    margin-top: 15px;
    font-size: 12px;
    font-weight: 500;
  }
  .box-return {
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-top: 40px;
  }
  .return-icon {
    margin-right: 10px;
  }
</style>


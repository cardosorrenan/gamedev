<template>
  <div class="presentation">
    <div class="shadow">
      <h3 class="title">{{title}}</h3>
      <h3 class="lead">{{lead}}</h3>
    </div>
  </div>  
</template>
<script>
export default {
  props: ['title', 'lead']
}
</script>
<style scoped>
  .presentation {
    height: 220px;
    width: 100%;
    margin: 0;
    text-align: center;
    overflow: hidden;
    background-image: url('../assets/img/mucambinho.jpg');
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
  .title {
    position: relative;
    top: 45%;
    font-size: 12pt;
    color: #FFF;
    text-shadow: 1px 1px #283040;
    margin: 0px 10px 0px 10px;
  }
  .lead {
    position: relative;
    top: 45%;
    font-size: 0.75em;
    color: #000;
    opacity: 0.7;
    margin: 0px 10px 0px 10px;
  }
</style>
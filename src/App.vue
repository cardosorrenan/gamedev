<template>
  <div class='container'>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  .container {
    font-family: 'Source Code Pro', monospace;
    display: block;
    align-self: center;
    margin: 20px !important;
    width: 90vw !important;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 70px);;
    background-color: #0774AF;
    padding: 0 !important;
    padding-bottom: 30px !important;
  }
</style>

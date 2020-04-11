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

<style>
  html, body, .app {
    background:  #283040;
    margin: 0;
    padding: 0;
  }
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
    display: flex;
    margin: 20px;
    width: calc(100vw - 40px);
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 70px);;
    background-color: #0774AF;
    padding-bottom: 30px;
  }
</style>

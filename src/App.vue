<template>
  <transition
        name="fade"
        mode="out-in"
      >
  <router-view/>
  </transition>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  html, body, .app {
    background:  #283040;
    max-height: 100vh;
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
</style>
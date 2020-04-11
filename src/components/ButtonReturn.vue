<template>
  <a class="return-btn" @click="goTo()">{{title}}</a>
</template>

<script>
export default {
  data () {
    return {
      title: "Voltar",
    }
  },
  methods: {
    goTo () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .return-btn {
    background-color: #283040;
    color: #ffffff;
    text-align: center;
    border-radius: 50em;
    padding: .75rem 1.25rem;
    width: 75px;
    font-size: 9pt;
    font-weight: 300;
    text-decoration: none;
    box-shadow: 2px 2px black;
    cursor: pointer;
  }
</style>
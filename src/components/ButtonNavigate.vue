<template>
  <a class="menu-btn" @click="goTo(title)">{{title}}</a>
</template>

<script>
export default {
  props: ['title', 'to'],
  methods: {
    goTo (title) {
      this.$router.push({ name: this.to, params: { title } })
    }
  }
}
</script>

<style scoped>
  .menu-btn {
    background-color: #283040;
    color: #ffffff;
    text-align: center;
    margin-top: 30px;
    border-radius: 50em;
    padding: .75rem 1.25rem;
    width: 150px;
    font-weight: 300;
    text-decoration: none;
    box-shadow: 2px 2px black;
    cursor: pointer;
  }
</style>
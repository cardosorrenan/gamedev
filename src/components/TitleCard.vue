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
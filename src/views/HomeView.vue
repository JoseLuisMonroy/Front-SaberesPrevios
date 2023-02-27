<template>
  <div class="home">
    <HomePage msg="Bienvenido alumno de nuevo ingreso!!"/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  left: 20%;
  width: 101%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(27,99,149);
}
</style>

<template>
  <div class="homePage">
    <h1>Escuela Superior de Computo</h1>
    <h2>{{ msg }}</h2>
  </div>
  <div class="Descripcion">

  </div>
  <div class="Banner">
  </div>
  <div class="Links">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homePage{
  margin-top: 2.2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(27,99,149);
}
h1 {
  font-size: 2rem;
  color: #eeeeee;
}
h2 {
  font-size: 1.5rem;
  color: #ebebeb;
}
</style>

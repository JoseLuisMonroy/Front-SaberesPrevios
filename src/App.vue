<template>
  <div class="conteiner">
    <nav class="Navigation">
      <a>ESCOM</a>
      <div onclick="set0()" >
        <router-link to="/login" class="seccion">Consultas</router-link>
        <router-link to="/registro" class="seccion1">Registro</router-link>
        <router-link to="/" class="seccion2">Inicio</router-link>
      </div>
    </nav>
  </div>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

.conteiner{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  align-items: center;
  padding: auto;
  background-color: rgb(247, 247, 247);
  color: rgb(27,99,149);
  transition: background-color 0.2s ease;
}

nav a {
  float: left;
  font-size: 2em;
  font-weight: bold;
  text-align: right;
}

.seccion, .seccion1, .seccion2{
    float: right;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding: 8px 16px;
    color: rgb (27,99,149);
    text-decoration: none;
    color: rgb(27,99,149);
    transition: background-color 0.1s ease;
}
.seccion:hover, .seccion1:hover, .seccion2:hover {
    background-color: rgb(27,99,149);
    color: #ffffff;
}

router-link{
    float: right;
    padding: 14px 16px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    padding: 8px 16px;
}

</style>

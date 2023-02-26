<template>
  <div class="conteiner">
  <nav class="Navigation">
    <a>ESCOM</a>
    <div>
      <router-link to="/Login" class="seccion">Login</router-link>
      <router-link to="/Registro" class="seccion">Registro</router-link>
      <router-link to="/" class="seccion">Home</router-link>
    </div>
  </nav>
</div>
  <div id="app">
    <router-view/>
  </div>
</template>

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
}

nav a {
  float: left;
  font-size: 2em;
  font-weight: bold;
  color: rgb(27,99,149);
  text-align: right;
  text-decoration: none;
}
.seccion {
    float: right;
    font-size: 1em;
    font-weight: bold;
    color: rgb(34, 34, 34);
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
}
.seccion:hover {
    background-color: rgb(27,99,149);
    color: #ffffff;
}
router-link{
    float: right;
    margin: 0;
    padding: 14px 16px;
    font-size: 1em;
    font-weight: bold;
    color: rgb(34, 34, 34);
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
}

</style>

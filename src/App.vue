<template>
  <div class="conteiner">
    <nav class="Navigation">
      <a>ESCOM</a>
      <div>
        <router-link to="/Login" class="seccion">Login</router-link>
        <router-link to="/Registro" class="seccion1">Registro</router-link>
        <router-link to="/" class="seccion2">Home</router-link>
      </div>
    </nav>
  </div>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".conteiner");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});
window.addEventListener("scroll", function() {
  var button = document.querySelector(".seccion");
  button.classList.toggle("scrolled", window.scrollY > 0);
});
window.addEventListener("scroll", function() {
  var button = document.querySelector(".seccion1");
  button.classList.toggle("scrolled", window.scrollY > 0);
});
window.addEventListener("scroll", function() {
  var button = document.querySelector(".seccion2");
  button.classList.toggle("scrolled", window.scrollY > 0);
});
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
.conteiner.scrolled {
  background-color: rgb(27,99,149);
  color: #ffffff;
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
.seccion.scrolled, .seccion1.scrolled, .seccion2.scrolled {
  background-color: rgb(27,99,149);
  color: #ffffff;
}
.seccion.scrolled:hover, .seccion1.scrolled:hover, .seccion2.scrolled:hover {
  background-color: rgb(247, 247, 247);
  color: rgb(27,99,149);
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

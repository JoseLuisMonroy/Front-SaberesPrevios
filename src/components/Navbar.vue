<template>
<div class="navigation" >
    <nav>
        <a> ESCOM</a>
        <ul>
        <li><a href="/Login">Consulta</a></li>
        <li><a href="/Registro">Registro</a></li>
        <li><a href="/">Inicio</a></li>
        </ul>
    </nav>
</div>
</template>

  
  <script>
  export default {
    name: 'Nav-bar',
  }
  </script>
  
<style>

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    align-items: center;
}
nav {
    background-color: #ffffff;
    overflow: hidden;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
nav ul {
    list-style-type: none;
    margin: 0;
    overflow: hidden;
}
nav li {
    float: right;
}
nav li a {
    display: block;
    align-items: center;
    font-size: .8em;
    color: rgb(34, 34, 34);
    text-align: center;
    padding: 14px 10px;
    text-decoration: none;
}
nav li a:hover {
    background-color: rgb(27,99,149);
    color: #ffffff;
}
nav li a.active {
    background-color: #006eff;
    color: #ffffff;
}

nav a {
    float: left;
    padding: 14px 16px;
    font-size: 2em;
    font-weight: bold;
    color: rgb(27,99,149);
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
}
</style>
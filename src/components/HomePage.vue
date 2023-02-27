<template>
  <div class="homePage">
    <h1>Escuela Superior de Cómputo</h1>
    <h2>{{ msg }}</h2>
  </div>
  <div class="Descripcion">
    <div class="fotoEscuela">
      <img src="http://www.contrareplica.mx/uploads/2019/08/14/normal/c8be3b0373b45bba54498a22d53ad768.jpg" alt="Escudo IPN" width="200" height="200">
    </div>
  <!-- á é í ó ú Á É Í Ó Ú> -->
    <div class="Bienvenida">
      <h2>Instituto Politécnico Nacional</h2>
      <p>El Instituto Politécnico Nacional les da la bienvenida a ésta, su nueva casa de estudios.</p>
      <p>Esperamos que su estancia en el IPN sea de su agrado y que aprovechen la escuela.</p>
      <p>En esta página podras encontrar la información relacionada al proceso de regitro de tus datos,
        asi mismo la fecha en la que podras llevar a cabo tu examen diagnóstico.</p>
      <p>Este examen no determinará nada, es simplemente estadístico.</p><br>
      <h2 class="Suerte">¡¡¡Mucha suerte!!!</h2>
    </div>
    <div class="Banner">
      <h1>Ya entré ¿Y ahora?</h1>
      <p>Antes de comenzar, te invitamos a realizar el registro de tus datos personales, esto lo podras llevar a cabo en el formulario 
        el cual se encuentra en la parte superior de la página.</p>
      <p>O dando click en el banner de abajo</p>
      <router-link to="/registro" class="Registro">
        <div>
          <h2>Registro de datos personales</h2>
          <p>Aquí podras registrarte, es indispensable para que puedas llevar a cabo tu examen diagnóstico</p>
        </div>
      </router-link>
      <p>
        Una vez registrado, podrás ver la fecha en la que podrás presentar tu examen de diagnóstico, asi como la información en tu ficha.
      </p>
    </div>
    <div class="Adios">
      <h1>Nos vemos pronto!!</h1>
    </div>
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
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
h1 {
  font-size: 2rem;
  color: #eeeeee;
}
h2 {
  font-size: 1.5rem;
  color: #ebebeb;
}

.Registro{
  width: 20rem;
  height: 10rem;
  background-color: rgb(27,99,149);
  border-radius: .5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  text-decoration: none;
}
.Registro h2{
  color: #eeeeee;
}
.Registro p{
  color: #ebebeb;
  text-decoration: none;
}

.Bienvenida{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
}
.Bienvenida h2, .Banner h1, .Adios h1{
  color: rgb(27,99,149);
}
.Descripcion{
  position: absolute;
  top: 18rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.Banner{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10rem;
}

.fotoEscuela{
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.Suerte{
  color: rgb(27,99,149);
  display: block;
  white-space: nowrap;
  border-right: 4px solid;
  width: 13rem;
  animation: typing 2.5s steps(20,end), blink-caret .75s infinite step-end alternate;
  overflow: hidden;
}
@keyframes typing {
  from { width: 0 }
  to { width: 12.5rem}
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  60% { border-color: rgb(27,99,149); }
}
.Adios{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10rem;
}

</style>

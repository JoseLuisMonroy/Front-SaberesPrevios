<template>
  <div class="homePage">
    <h1>Escuela Superior de Computo</h1>
    <h2>{{ msg }}</h2>
  </div>
  <div class="Descripcion">
    <div class="fotoEscuela">
      <img src="http://www.contrareplica.mx/uploads/2019/08/14/normal/c8be3b0373b45bba54498a22d53ad768.jpg" alt="Escudo IPN" width="200" height="200">
    </div>
    <div class="Bienvenida">
      <h2>Instituto Politecnico Nacional</h2>
      <p>El Instituto Politecnico Nacional les da la bienvenida a esta, su nueva casa de estudios.</p>
      <p>Esperamos que su estancia en el IPN sea de su agrado y que aprovechen la escuela.</p>
      <p>En esta pagian podras encontrar la informacion relacionada al proceso de regitro de tus datos, <br>asi mismo la fecha enla que podras llevar a cabo tu examen diagnostico.</p>
      <p>Este examen no determinara, nada, es simplemente estadistico.</p>
    </div>
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
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.Descripcion{
  position: absolute;
  top: 18rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.fotoEscuela{
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
</style>

<template>
    <div class="error">
        <div class="logos">
            <img src="../assets/Escom.png" alt="Logo Escom" class="logos">
        </div>
        <div>
          <h1>Error 404</h1>
        <h2>Lo sentimos, la pagina que estas buscando no existe, te invitamos a visitar la pagina de inicio </h2>
        </div>
        <div class="logos">
            <img src="../assets/Ipn.png" alt="Logo IPN" class="logos">
        </div>  
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 7680px) {
    .error{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: rgb(27, 99, 149);
    top: 40rem;
    color: #eeeeee;
    padding-top: 2rem;
  }
  .escom{
    width: 90%;
    height: auto;
    align-items: center;
  }
  .logos{
    width: 70%;
    height: auto;
    padding-top: 1%;
    height: auto;
    align-items: center;
  }
  .error h1{
    font-size: auto;
    color: #eeeeee;
  }
  .error h2{
    font-size: auto;
    color: #eeeeee;
  }
}
</style>
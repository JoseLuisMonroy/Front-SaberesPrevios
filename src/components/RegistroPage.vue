<template>
  <div class="registro">
     <div class="titulo">
        <h1>Registro de datos</h1>
     </div>
  </div>
  <div class="consejos">
        <h2>Consejos para el registro</h2>
        <ul>
          <li>Llenar los campos con informacion veridica.</li>
          <li>Tener presente el correo que se dio, puesto que es el unico medio por el que podras recueprar tu ficha.</li>
          <li>Descargar el pdf generado al final de tu registro.</li>
          <li>Revisar tu información antes de enviarla</li>
        </ul>
  </div>
     <div class="formulario">
        <form  @submit.prevent="enviarFormulario">
                <label for="nombres">Nombre(s):</label><br/>
                <input type="text" name="nombre" id="nombre" required><br>
                <label for="apellidoP">Apellido Paterno: </label><br>
                <input type="text" name="apellidoP" id="apellidoP" required><br>
                <label for="apellidoM">Apellido Materno: </label><br>
                <input type="text" name="apellidoM" id="apellidoM" required><br>

                <label for="sexo">Sexo:</label><br>
                <select name="sexo" id="sexo" required><br>
                        <option value="">Seleccione su sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                </select><br>

                <label for="fecha_nacimiento">Fecha de nacimiento:</label><br>
                <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" required><br>

                <label for="discapacidad">¿Tiene alguna discapacidad?</label><br>
                <input type="radio" name="discapacidad" id="discapacidad_si" value="si">
                <label for="discapacidad_si">Sí</label><br>
                <input type="radio" name="discapacidad" id="discapacidad_no" value="no" checked>
                <label for="discapacidad_no">No</label><br>

                <label for="tipo_discapacidad">Tipo de discapacidad:</label><br>
                <input type="text" name="tipo_discapacidad" id="tipo_discapacidad"><br>

                <label for="otro_padecimiento">¿Tiene algún otro padecimiento?</label><br>
                <input type="radio" name="otro_padecimiento" id="otro_padecimiento_si" value="si">
                <label for="otro_padecimiento_si">Sí</label><br>
                <input type="radio" name="otro_padecimiento" id="otro_padecimiento_no" value="no" checked>
                <label for="otro_padecimiento_no">No</label><br>

                <label for="calle_numero">Calle y número:</label><br>
                <input type="text" name="calle_numero" id="calle_numero" required><br>

                <label for="colonia">Colonia:</label><br>
                <input type="text" name="colonia" id="colonia" required><br>

                <label for="codigo_postal">Código postal:</label><br>
                <input type="text" name="codigo_postal" id="codigo_postal" required><br>

                <label for="alcaldia_municipio">Alcaldía o municipio:</label><br>
                <input type="text" name="alcaldia_municipio" id="alcaldia_municipio" required><br>

                <label for="estado">Estado:</label><br>
                <input type="text" name="estado" id="estado" required><br>

                <label for="correo">Correo electrónico:</label><br>
                <input type="email" name="correo" id="correo" required><br>

                <label for="telefono_celular">Teléfono celular:</label><br>
                <input type="tel" name="telefono_celular" id="telefono_celular" required><br>

                <label for="escuela_procedencia">Escuela de procedencia:</label><br>
                <input type="text" name="escuela_procedencia" id="escuela_procedencia" required><br>

                <label for="tipo_bachillerato">Tipo de bachillerato:</label><br>
                <select name="tipo_bachillerato" id="tipo_bachillerato" required>
                        <option value="">Seleccione el tipo de bachillerato</option>
                        <option value="general">General</option>
                        <option value="tecnico">Técnico</option>
                        <option value="preparatoria">Preparatoria</option>
                </select><br>

                <label for="promedio">Promedio:</label><br>
                <input type="number" name="promedio" id="promedio" required><br>

                <label for="carrera_asignada">Carrera asignada:</label><br>
                <select name="carrera_asignada" id="carrera_asignada" required>
                        <option value="">Seleccione la carrera asignada</option>
                        <option value="IIA">Inteligencia Artificial</option>
                        <option value="LCD">Ciencia de Datos</option>
                        <option value="ISC">Sistemas Computacionales</option>
                </select><br>

                <label for="tutor">Nombre(s) del tutor:</label><br>
                <input type="text" name="tutor" id="tutor" required><br>
                <label for="tutorP">Apellido paterno del tutor:</label><br>
                <input type="text" name="tutorP" id="tutorP" required><br>
                <label for="tutorM">Apellido materno del tutor:</label><br>
                <input type="text" name="tutorM" id="tutorM" required><br>

                <label for="correo_tutor">Correo del padre o tutor:</label><br>
                <input type="email" name="correo_tutor" id="correo_tutor" required><br>

                <label for="telefono_celular_tutor">Teléfono del padre o tutor:</label><br>
                <input type="tel" name="telefono_celular_tutor" id="telefono_celular_tutor" required><br>
                <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 7680px) {
  .registro {
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 99, 149);
  top: 20%;
}
.registro h1 {
  font-size: 2rem;
  color: #eeeeee;
}
.titulo {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.consejos{
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  align-items: center;
  text-align: left;
}
.consejos h2{
  font-size: 1.5rem;
  color: rgb(27, 99, 149);
}

}

br {
  margin-bottom: 4rem;
}
.formulario {
  color: rgb(27, 99, 149);
  font-size: .8rem;
  padding: 1rem;
}

.formulario input {
  width: auto;
  height: 2rem;
  border: none;
  border-bottom: 1px solid rgb(27, 99, 149);
  border-radius: 5px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.formulario input:focus {
  outline: none;
  border-bottom: 3px solid rgb(27, 99, 149);
}
.formulario select {
  width: 70%;
  height: 2rem;
  border: none;
  border-bottom: 1px solid rgb(27, 99, 149);
  border-radius: 5px;
  padding: 0 1rem;
  margin-bottom: 1rem;
}
.formulario select:focus {
  outline: none;
  border-bottom: 3px solid rgb(27, 99, 149);
}
.formulario label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.formulario button {
  width: 70%;
  height: 2rem;
  border: none;
  border-radius: 5px;
  padding: 0 1rem;
  margin-bottom: 1rem;
  background-color: rgb(27, 99, 149);
  color: #eeeeee;
  font-size: 1rem;
  font-weight: 600;
  transition: 1s;
}
.formulario button:hover {
  background-color: rgb(248, 248, 248);
  color: rgb(27, 99, 149);
  border: none;
  cursor: pointer;
  border-radius: 6px;
}
.formulario button:focus {
  outline: none;
  border-bottom: 3px solid rgb(27, 99, 149);
}

</style>
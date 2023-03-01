function siguiente(){
    //boton para pasar a la siguiente pagina del registro
    document.getElementById("datosPersonales").style.display = "none";
    document.getElementById("datosEscuela").style.display = "none";
    document.getElementById("datosTutor").style.display = "none";


}
/*function mostrarSeccion(numeroSeccion) {
		// Ocultamos todas las secciones
		document.getElementById("seccion1").style.display = "none";
		document.getElementById("seccion2").style.display = "none";
		document.getElementById("seccion3").style.display = "none";
		// Removemos la clase "active" de todos los botones
		var botones = document.getElementsByTagName("button");
		for (var i = 0; i < botones.length; i++) {
			botones[i].classList.remove("active");
		}
		// Mostramos la sección correspondiente y agregamos la clase "active" al botón clickeado
		document.getElementById("seccion" + numeroSeccion).style.display = "block";
		document.getElementsByTagName("button")[numeroSeccion-1].classList.add("active");
	}*/
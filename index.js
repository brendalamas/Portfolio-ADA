const personal = document.querySelector("#personal")
const modalProyectosPersonales = document.querySelector(".proyectos-personales-modal");
const cerrarProyectosPersonales = document.querySelector("#cerrar-proyectos-personales");

personal.onclick = () => {
    modalProyectosPersonales.style.display = "flex"
}

cerrarProyectosPersonales.onclick = () =>{
    modalProyectosPersonales.style.display = "none"
}
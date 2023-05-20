//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez sque se ha seleccionado una opcion en el modo responsive
    var ocultarMenuResponsive = document.getElementById("nav");
    ocultarMenuResponsive.className = "";
}

//Funcion que muestra el menu repsonsive
function responsiveMenu(){
    var menuResponsive = document.getElementById("nav");
    if(menuResponsive.className ===""){
        menuResponsive.className = "responsive"
    }else{
        menuResponsive.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades

window.onscroll = function(){
    efectoHabilidades()
};



//funcion que aplica la animacion de la barra de las hahbilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");

    }
}
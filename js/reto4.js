
let cata1 = document.querySelector('#cata1');
let cata2 = document.querySelector('#cata2');
let cata3 = document.querySelector('#cata3');
let cata4 = document.querySelector('#cata4');
let cata5 = document.querySelector('#cata5');

function catalogo1() {
    document.getElementById("catalogo1").style.display = 'block';
    cata1.classList.add("activo");
    document.getElementById("catalogo2").style.display = 'none';
    cata2.classList.remove("activo");
    document.getElementById("catalogo3").style.display = 'none';
    cata3.classList.remove("activo");
    document.getElementById("catalogo4").style.display = 'none';
    cata4.classList.remove("activo");
    document.getElementById("catalogo5").style.display = 'none';
    cata5.classList.remove("activo");
}

function catalogo2(){
    document.getElementById("catalogo1").style.display = 'none';
    cata1.classList.remove("activo");
    document.getElementById("catalogo2").style.display = 'block';
    cata2.classList.add("activo");
    document.getElementById("catalogo3").style.display = 'none';
    cata3.classList.remove("activo");
    document.getElementById("catalogo4").style.display = 'none';
    cata4.classList.remove("activo");
    document.getElementById("catalogo5").style.display = 'none';
    cata5.classList.remove("activo");
}

function catalogo3(){
    document.getElementById("catalogo1").style.display = 'none';
    cata1.classList.remove("activo");
    document.getElementById("catalogo2").style.display = 'none';
    cata2.classList.remove("activo");
    document.getElementById("catalogo3").style.display = 'block';
    cata3.classList.add("activo");
    document.getElementById("catalogo4").style.display = 'none';
    cata4.classList.remove("activo");
    document.getElementById("catalogo5").style.display = 'none';
    cata5.classList.remove("activo");
}

function catalogo4(){
    document.getElementById("catalogo1").style.display = 'none';
    cata1.classList.remove("activo");
    document.getElementById("catalogo2").style.display = 'none';
    cata2.classList.remove("activo");
    document.getElementById("catalogo3").style.display = 'none';
    cata3.classList.remove("activo");
    document.getElementById("catalogo4").style.display = 'block';
    cata4.classList.add("activo");
    document.getElementById("catalogo5").style.display = 'none';
    cata5.classList.remove("activo");
}

function catalogo5(){
    document.getElementById("catalogo1").style.display = 'none';
    cata1.classList.remove("activo");
    document.getElementById("catalogo2").style.display = 'none';
    cata2.classList.remove("activo");
    document.getElementById("catalogo3").style.display = 'none';
    cata3.classList.remove("activo");
    document.getElementById("catalogo4").style.display = 'none';
    cata4.classList.remove("activo");
    document.getElementById("catalogo5").style.display = 'block';
    cata5.classList.add("activo");
}




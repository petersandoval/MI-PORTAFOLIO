const curriculumVitae = document.querySelector("#curriculumVitae");
const demoUno = document.querySelector("#demoUno");
const demoDos = document.querySelector("#demoDos");
const gitHub = document.querySelector("#gitHub");
const linkedIn = document.querySelector("#linkedIn");
const repositorioUno = document.querySelector("#repositorioUno");
const repositorioDos = document.querySelector("#repositorioDos");

curriculumVitae.addEventListener("click", function(){
    abrirNuevaPagina("./EjemploCV.pdf");
});

demoUno.addEventListener("click", function(){
    abrirNuevaPagina("https://petersandoval.github.io/Encriptador-de-textos-pash/");
});

demoDos.addEventListener("click", function(){
    abrirNuevaPagina("https://petersandoval.github.io/JUEGO-DEL-AHORCADO-challenger-2-de-alura-latam-/");
});

gitHub.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/petersandoval");
});

linkedIn.addEventListener("click", function(){
    abrirNuevaPagina("https://www.linkedin.com/in/pedro-sandoval-7b4231248");
});

repositorioUno.addEventListener("click", function(){
   abrirNuevaPagina("https://petersandoval.github.io/Encriptador-de-textos-pash/");
});

repositorioDos.addEventListener("click", function(){
    abrirNuevaPagina("https://petersandoval.github.io/JUEGO-DEL-AHORCADO-challenger-2-de-alura-latam-/");
}); 

function abrirNuevaPagina(url){
    let nuevaPagina = window.open(url, '_blank');
    nuevaPagina.focus();
}


import {barcelona, roma, paris, londres} from './ciudades.js'

//obtener elementos del DOM
let enlaces= document.querySelectorAll('a')
let tituloElemento=document.getElementById('titulo')
let subtituloElemento=document.getElementById('subtitulo')
let parrafoElemento=document.getElementById('parrafo')

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //remover la clase active
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active');
        });
        
        //agregar clase active
        this.classList.add('active');
        
        //obtener el contenido correspondiente
        let contenido= obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML=contenido.subtitulo
        parrafoElemento.innerHTML=contenido.parrafo

    })
    
})

//funcion para traerla informacion de ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
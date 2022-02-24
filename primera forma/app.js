const menu= document.getElementById('boton');
const navegacion = document.getElementById('navegacion');

menu.addEventListener('click', hellobro);

function hellobro(){  
    if(navegacion.classList.contains('ocultar')){
        navegacion.classList.remove('ocultar');
    }else{
        navegacion.classList.add('ocultar');
    }
}
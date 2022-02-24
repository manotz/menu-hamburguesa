const iconoMenu= document.querySelector('#icono-menu');
  const  menu=document.querySelector("#menu");


    iconoMenu.addEventListener('click', (e) =>{
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');

        if(iconoMenu.classList.contains('fondo')){
            iconoMenu.classList.remove('fondo');
        }else{
            iconoMenu.classList.add('fondo');
        }

    })
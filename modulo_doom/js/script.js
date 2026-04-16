// ** ANIMAÇÕES COM JAVASCRIPT PT2

const span = document.querySelector('.conteudo span')

span.addEventListener("click", function(){
    const conteudo = document.querySelector('.conteudo p');

    if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Ver mais...';
        conteudo.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ver menos.';
        conteudo.classList.add('mostrar');
    }

});
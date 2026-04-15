// ** MANIPULANDO ELEMENTOS E CONTEÚDO

const p = document.getElementsByTagName('p'); // pegando todas as tags do mesmo tipo

// acessando via posição da tag
// alert(p[3].innerHTML);

// alterando elemento da tag via JavaScript
// p[0].innerHTML = 'Manipulado via JS!';

/*
for(var i=0; i<p.length; i++){
    p[i].innerHTML = 'Manipulado via JS - ' + i;
}
*/

// pegando o conteúdo já existente e adicionando algo a ele
for(i=0; i<10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}
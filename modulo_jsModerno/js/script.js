/** REST E SPREAD
 *
 *  
*/

/*
var nomes = [
    {
        nome:'Laura'
    },
    {
        nome:'Josemar'
    }
]

// spread: '...nomes,' pegue os nomes e adicione eles ao inicio
const objetos = [...nomes,{
    nome:'Otávio'
}]
*/

// rest: nos permite representar um número indefinido de argumentos
function testes(...nomes){
    console.log(nomes);
}

testes(1,2,3,4,5,6,{nome:'otavio'});
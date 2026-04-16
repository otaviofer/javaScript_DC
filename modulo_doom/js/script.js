// ** ANIMAÇÕES COM JAVASCRIPT

const box = document.querySelectorAll(".box")[0];

/*
setTimeout(()=>{
    box.classList.add('animEsquerda');
},1000); // executa depois de 1s
*/

box.addEventListener("click", () => {   // executa apos do click
    box.classList.add("animEsquerda");
});

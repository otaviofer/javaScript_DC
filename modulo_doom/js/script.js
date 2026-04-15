// ** MANIPULANDO CSS ATRAVÉS DE CLASSES

const elementos = document.getElementsByClassName("box");

/*
const el = elementos[0];

el.style.width = 100;
el.style.height = 100;
el.style.backgroundColor = 'green';
el.style.marginLeft = 200;
*/

for (let i = 0; i < elementos.length; i++) {
  let el = elementos[i];

  el.style.width = 100;
  el.style.height = 100;
  el.style.backgroundColor = "green";
  el.style.marginLeft = 200;
  el.style.marginTop = 20;
}

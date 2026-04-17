/** DESTRUCTURE
 *
 *  
*/

const arr = ['Otávio','João','Eluana','Jhoan','Alex'];

// armazena cada indice em uma variavel especifica
const [a,b,...c] = arr;     // a partir do 3º indice  coloque tudo na variavel c
alert(c);
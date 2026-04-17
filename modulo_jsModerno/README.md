Uma **Promise** (Promessa) é exatamente o que o nome diz: um código que promete te entregar algo no futuro. Como no mundo real, uma promessa pode ser cumprida ou quebrada.

No JavaScript, usamos isso para tarefas que **levam tempo** (como carregar um arquivo ou consultar um banco de dados), para que o resto do programa não fique travado esperando.

---

### 🛡️ Os 3 Estados de uma Promise
Imagine que você pediu uma pizza:
1.  **Pending (Pendente):** A pizza está sendo feita. Você ainda não tem o resultado.
2.  **Resolved (Resolvida):** A pizza chegou! Tudo deu certo.
3.  **Rejected (Rejeitada):** O entregador furou o pneu. Algo deu errado.



---

### 🔍 Explicando o seu código

#### A Criação (O Contrato)
```javascript
return new Promise(function(resolve, reject){
    const erro = true; // Simulação de um problema
    if(erro){
        reject('Erro...'); // "Quebrei a promessa" -> Chama o erro
    } else {
        resolve("Sucesso!"); // "Cumpri a promessa" -> Passa o dado adiante
    }
})
```
* **`resolve`**: É a função que você chama quando o que você queria fazer deu certo.
* **`reject`**: É a função que você chama quando algo falhou.

#### O Consumo (A Entrega)
Para usar o resultado da Promise, você não usa variáveis comuns, você usa "ganchos":

```javascript
testes()
  .then(function(res){
      // O .then() só roda se a promessa foi cumprida (resolve)
      alert(res); 
  })
  .catch(function(err){
      // O .catch() só roda se a promessa falhou (reject)
      alert(err); 
  });
```

---

### 📝 Resumo para o seu README:
* **Promises** lidam com processos assíncronos (que não acontecem instantaneamente).
* **`.then()`**: É o caminho da felicidade (sucesso).
* **`.catch()`**: É o gerenciamento de danos (erro).

---

Se as **Promises** são a "pizza sendo feita", o **Async/Await** é a forma de você esperar por essa pizza de um jeito muito mais elegante e organizado.

Antigamente, com o `.then()`, o código parecia uma escada (callback hell). O **Async/Await** permite que você escreva código que parece "parado", mas que na verdade está apenas esperando o tempo certo.

---

### 🗝️ Os Dois Comandos Mágicos

#### 1. `async` (O Aviso)
Você coloca essa palavra antes da função para avisar ao JavaScript: *"Ei, esta função vai lidar com coisas que levam tempo. Fique esperto!"*. Toda função `async` retorna, automaticamente, uma Promise.

#### 2. `await` (A Pausa)
Você coloca essa palavra antes de uma Promise. Ela diz: *"Pare tudo aqui e só continue para a próxima linha quando esta promessa for cumprida"*.

---

### 🔍 Explicando o seu código

No seu exemplo, o `await` muda completamente o comportamento do programa:

```javascript
async function testes2() {
  // O JavaScript para aqui por 2 segundos (tempo do setTimeout da Promise)
  await testes().then(function(res){
    alert(res); // Primeiro aparece esse alerta
  });

  // Esta linha SÓ roda depois que o await de cima terminar
  alert("Olá Mundo"); // Depois de 2 segundos, aparece este
}
```

**Se você tirasse o `await`:**
O alerta "Olá Mundo" apareceria **antes** da Promise terminar, porque o JavaScript não esperaria os 2 segundos. Com o `await`, você cria uma fila organizada.

---

### 🛡️ Tratamento de Erros (O jeito certo)
Quando usamos `async/await`, geralmente paramos de usar `.then()` e `.catch()` e passamos a usar o bloco **`try/catch`**, que deixa o código muito mais limpo:

```javascript
async function testes2() {
  try {
    const res = await testes(); // Espera o sucesso
    alert(res);
  } catch (err) {
    alert(err); // Se der erro, cai direto aqui
  }
  alert("Olá Mundo");
}
```

---

### 📝 Resumo para o seu README:

* **Async/Await** é o "açúcar sintático" para as Promises (deixa mais bonito e fácil de ler).
* **`async`**: Define que a função é assíncrona.
* **`await`**: Pausa a execução da função até que a Promise seja resolvida.
* **Benefício**: O código assíncrono passa a ser lido de cima para baixo, como se fosse um código comum (síncrono).
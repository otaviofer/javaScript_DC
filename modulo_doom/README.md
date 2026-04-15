# 🕹️ Manipulação de DOM (Document Object Model)

O **DOM** é uma interface de programação que representa o documento HTML como uma estrutura de árvore. Ele permite que o JavaScript acesse, altere e estilize a estrutura, o conteúdo e o estilo da página em tempo real.



## 🎯 1. Seleção de Elementos (A Busca)
Para manipular algo, você primeiro precisa encontrá-lo. As formas mais eficazes são:

* **`document.querySelector()`**: O buscador mais versátil. Usa seletores CSS (`#id`, `.classe`, `tag`).
* **`document.getElementById()`**: Busca direta e rápida pelo ID único do elemento.
* **`document.querySelectorAll()`**: Captura uma lista (NodeList) de todos os elementos que combinam com o seletor.

## ✍️ 2. Alteração de Conteúdo e Estilo (A Transformação)
Uma vez selecionado, você pode alterar as propriedades do elemento:

* **`.innerText` / `.innerHTML`**: Altera o texto ou o código HTML interno.
* **`.style.propriedade`**: Altera o CSS diretamente (ex: `.style.color = "red"`).
* **`.classList.add()` / `.remove()` / `.toggle()`**: A melhor prática para alterar o visual, alternando classes CSS já definidas.

## ⚡ 3. Eventos (Os Gatilhos)
O DOM permite que a página reaja às ações do usuário através do **`addEventListener()`**.

* **Principais Eventos:**
    * `click`: Disparado ao clicar.
    * `submit`: Disparado ao enviar um formulário (lembre-se do `e.preventDefault()`).
    * `input` ou `change`: Disparados ao interagir com campos de texto ou seleção.
    * `keydown` / `keyup`: Disparados pelas teclas do teclado.



## 🏗️ 4. Criação Dinâmica (A Forja)
Você pode criar novos elementos do zero e inseri-los na "árvore" da página:

1. **`document.createElement("tag")`**: Cria o elemento na memória.
2. **`.appendChild()`**: Insere o elemento dentro de outro (como um filho).
3. **`.remove()`**: Deleta o elemento da realidade da página.

---

### 🧠 Resumo de Conceito para Documentação:
> Manipular o DOM não é alterar o arquivo `.html` físico, mas sim alterar a **representação na memória** que o navegador está exibindo. É uma manipulação "ao vivo".

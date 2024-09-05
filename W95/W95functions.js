//Exemplo1
construct({
  tag: "button",
  parent: "container", // ID do elemento pai
  id: "btnTeste",
  content: "Clique em mim!",
  classes: ["btn", "btn-primary"],
  eventType: "click",
});

//Exemplo2
construct({
  tag: "input",
  type: "text",
  parent: "formContainer",
  id: "inputNome",
  content: "Digite seu nome",
  classes: ["input-classe"]
});

//Exemplo3
const elementsArray = [
  {
    tag: "div",
    parent: "container",
    id: "div1",
    content: "<strong>Este é o primeiro div</strong>",
    classes: ["div-class", "primary"],
  },
  {
    tag: "button",
    parent: "container",
    id: "btn1",
    content: "Clique aqui",
    classes: ["btn", "btn-primary"],
    eventType: "click",
    eventFunction: () => alert("Botão 1 clicado!")
  },
  {
    tag: "input",
    type: "text",
    parent: "container",
    id: "input1",
    content: "Digite algo...",
    classes: ["input-class"]
  },
  {
    tag: "a",
    parent: "container",
    content: "https://example.com",
    classes: ["link-class"],
  }
];

// Chama a função construct para criar todos os elementos de uma vez
construct(elementsArray);
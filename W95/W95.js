const workSpace = {
  tag: "div",
  id: "workspace",
  classes: ["workspace"],
};

const taskBar = {
  tag: "div",
  id: "taskbar",
  classes: ["taskbar"],
};

const startBtn = [{
  tag: "button",
  parent: "taskbar",
  id: "btniniciar",
  classes: ["buttonType1", "borda1"],
  eventType: "click",
  eventFunction: toggleBorder,
},
{
  tag: 'span',
  parent: 'btniniciar',
  id: 'btnIniciarTextContent',
  content: '<u>In</u>iciar',
  classes: ['underline']
},
]

const taskBarClock = {
  tag: "button",
  parent: "taskbar",
  id: "taskBarClock",
  content: "00:00",
  classes: ["buttonType1", "borda2"],
};

const menuIniciar = [
  {
    tag: "div",
    id: "menuIniciar",
    classes: ["menuIniciar", "borda1"],
  },
  {
    tag: "div",
    parent: "menuIniciar",
    id: "decMenuIniciarBar",
    classes: ["barra"],
  },
  {
    tag: "p",
    parent: "decMenuIniciarBar",
    content: "Mindows",
    classes: ["windows95txt", 'underline'],
  },
  { tag: "p", parent: "decMenuIniciarBar", content: "95", classes: ["w95"] },
];



function construct(elements){
  if(Array.isArray(elements)){
    elements.forEach(item => constructStep2(item));
  }else{
    constructStep2(elements)
  }
}
function constructStep2({
tag,
type,
parent,
id,
content,
classes,
eventType,
eventFunction,
}) {
const element = document.createElement(tag);
if ((tag === "input" || tag === "button") && type) element.type = type;
if (id) element.id = id;
if (classes) element.classList.add(...classes);
if (eventType && eventFunction) {
  element.addEventListener(eventType, eventFunction);
}
if (parent) {
  const parentElement = document.getElementById(parent);
  if (parentElement) {
    parentElement.appendChild(element);
  } else {
    console.warn(`Elemento com id "${parent}" não encontrado. `);
  }
} else {
  document.body.appendChild(element);
}
if (content) {
  if (tag === "input" || tag === "img") {
    element.value = content;
  } else if (tag === "a") {
    element.href = content;
  } else {
    element.innerHTML = content;
  }
}

return element;
}


//workspace
construct(workSpace);

//taskbar
construct(taskBar);

//botão iniciar
construct(startBtn);

//botão relogio
construct(taskBarClock);

function updateClock() {
  const clockElement = document.getElementById("taskBarClock");
  const dateElement = document.getElementById("date");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear()).slice(-2);

  clockElement.textContent = `${hours}:${minutes}`;
  dateElement.textContent = `${day}/${month}/${year}`;
}
setInterval(updateClock, 1000);

function toggleBorder() {
  this.classList.toggle("ativo");
  toggleMenu(menuIniciar);
}

function toggleMenu(objeto) {
  if (Array.isArray(objeto)) {
    const menuCondition = document.getElementById(objeto[0].id);
    if (menuCondition) {
      menuCondition.remove();
    } else {
      construct(objeto)
    }
  } else if(objeto && objeto.id){
    const menuCondition = document.getElementById(objeto.id);
    if (menuCondition) {
      menuCondition.remove();
    } else {
      construct(objeto);
    }
  }
}



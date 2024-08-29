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

const startBtn = {
  tag: "button",
  parent: "taskbar",
  id: "btniniciar",
  content: "Iniciar",
  classes: ["buttonType1", "borda1"],
  eventType: "click",
  eventFunction: toggleBorder,
};

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
  { tag: "div", parent: "menuIniciar", classes: ["barra"] },
];

function construct({
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
  if (tag === "input" && type) element.type = type;
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
  if (content) element.textContent = content;
  return element;
}

// function constructArr(elements) {
//   elements.forEach(({
//     tag,
//     type,
//     parent,
//     id,
//     content,
//     classes,
//     eventType,
//     eventFunction,
//   }) => {
    
//   const element = document.createElement(tag);
//   if (tag === "input" && type) element.type = type;
//   if (id) element.id = id;
//   if (classes) element.classList.add(...classes);
//   if (eventType && eventFunction) {
//     element.addEventListener(eventType, eventFunction);
//   }
//   if (parent) {
//     const parentElement = document.getElementById(parent);
//     if (parentElement) {
//       parentElement.appendChild(element);
//     } else {
//       console.warn(`Elemento com id "${parent}" não encontrado. `);
//     }
//   } else {
//     document.body.appendChild(element);
//   }
//   if (content) element.textContent = content;
//   return element;
// })
// }




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
  const menuCondition = document.getElementById(objeto[0].id);
  if (menuCondition) {
    menuCondition.remove();
  } else {
    objeto.forEach(item => construct(item))
  }
}
//objetos
const workSpace = {
  tag: "div",
  id: "workspace",
  classes: ["workspace"],
};

const taskBar = [
  {
    tag: "div",
    id: "taskbar",
    classes: ["taskbar"],
  },
  {
    tag: "button",
    parent: "taskbar",
    id: "btniniciar",
    classes: ["buttonType1", "borda1"],
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this, menuIniciar);
    },
  },
  {
    tag: "span",
    parent: "btniniciar",
    id: "btnIniciarTextContent",
    content: "<u>In</u>iciar",
  },
  {
    tag: "button",
    parent: "taskbar",
    id: "taskBarClock",
    content: "00:00",
    classes: ["buttonType1", "borda2"],
  },
];

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
    classes: ["windows95txt"],
  },
  { tag: "p", parent: "decMenuIniciarBar", content: "95", classes: ["w95"] },
  {
    tag: "div",
    parent: "menuIniciar",
    id: "buttonBar",
    classes: ["buttonBar"]
  },
  //buttons
  {
    tag: "button",
    parent: "buttonBar",
    id: "btn",
    content: "Programs",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "btn2",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "btn3",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "btn4",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "help",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "run",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
  {
    tag: "button",
    parent: "buttonBar",
    id: "shutdown",
    content: "Documents",
    eventType: "click",
    eventFunction: function () {
      toggleState.call(this);
    },
  },
];

//functions
function construct(elements) {
  if (Array.isArray(elements)) {
    elements.forEach((item) => constructStep2(item));
  } else {
    constructStep2(elements);
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

function toggleState(objeto) {
  let state = this.dataset.state === "true";
  state = !state;
  this.dataset.state = state;
  if (state) {
    this.classList.add("ativo");
    console.log("yes");
  } else {
    this.classList.remove("ativo");
    console.log("no");
  }

  if (objeto) {
    if (Array.isArray(objeto)) {
      const menuCondition = document.getElementById(objeto[0].id);
      if (menuCondition) {
        menuCondition.remove();
      } else {
        construct(objeto);
      }
    } else if (objeto && objeto.id) {
      const menuCondition = document.getElementById(objeto.id);
      if (menuCondition) {
        menuCondition.remove();
      } else {
        construct(objeto);
      }
    }
  }
}

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
  // dateElement.textContent = `${day}/${month}/${year}`;
}
setInterval(updateClock, 1000);

//render
construct(workSpace);
construct(taskBar);
construct(taskBarClock);

fetch('W95.json')
  .then(response => response.json())
  .then(data =>{
    console.log(data);
  })
  .catch(error => console.error('ERRO .JSON', error))

  
function createElement(
  tag,
  parent,
  id,
  content,
  classes,
  eventType,
  eventFunction
) {
  const element = document.createElement(tag);
  element.id = id;
  element.classList.add(...classes);
  if (eventType && eventFunction) {
    element.addEventListener(eventType, eventFunction);
  }
  parent.appendChild(element);
  element.textContent = content;
  return element;
}

//workspace
const workspace = createElement("div", document.body, "workspace", "", [
  "workspace",
]);

//taskbar
const taskbar = createElement("div", document.body, "taskbar", "", [
  "borda1",
  "taskbar",
]);

//botão iniciar
const startbtn = createElement(
  "button",
  taskbar,
  "btniniciar",
  "Iniciar",
  ["borda1"],
  "click",
  toggleBorder
);

//menuIniciar
let menuIniciar;
let decMenuIniciar;
let windowsTextMenuBar;
let w95TextMenuBar;

//botão relogio
const clock = createElement("button", taskbar, "menuclock", "00:00", [
  "borda2",
]);

function updateClock() {
  const clockElement = document.getElementById("menuclock");
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
  this.classList.toggle("borda2");
  toggleMenu();
}

function toggleMenu() {
  if (!menuIniciar) {
    menuIniciar = createElement("div", document.body, "menuiniciar", "", [
      "menuiniciar",
      "borda1",
    ]);
    decMenuIniciar = createElement("div", menuIniciar, "", "", ["barra"]);
    windowsTextMenuBar = createElement("p", decMenuIniciar, "", "Mindows", [
      "windows95txt",
    ]);
    w95TextMenuBar = createElement("p", decMenuIniciar, "", "95", ["w95"]);
  } else {
    menuIniciar?.remove();
    menuIniciar = null;
  }
}

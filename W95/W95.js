function createElement(tag, parent, id, classes){
  const element = document.createElement(tag)
  element.id = id
  element.classList.add(...classes)
  parent.appendChild(element)
  return element
}



function basic(){
//workspace
const workspace = createElement('div', document.body, 'workspace', ['workspace'])

//taskbar
const taskbar = createElement('div', document.body, 'taskbar', ['borda1', 'taskbar'])

//botão iniciar
const startbtn = createElement('button', taskbar, 'btniniciar', ['borda1'])

startbtn.textContent = 'iniciar'

startbtn.addEventListener("click", function(){
  startbtn.classList.toggle('borda1')
  startbtn.classList.toggle('borda2')
});

//botão relogio
const clock = createElement('button', taskbar, 'menuclock', ['borda2'])
  
}


function updateClock() {
  const clockElement = document.getElementById('menuclock');
  const dateElement = document.getElementById('date');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);


  clockElement.textContent = `${hours}:${minutes}`;
  dateElement.textContent = `${day}/${month}/${year}`;
}


setInterval(updateClock, 1000)

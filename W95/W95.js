//EXEMPLO PARA CONSTRUÇÃO DE JANELAS

// const div = document.createElement("div");
// const div2 = document. createElement("div")

// document.body.appendChild(div);
// div.style.backgroundColor = "red";
// div.style.padding = "600px";
// div.classList.add('classe1', 'classe2', 'classe3');
// div.id = 'meuid';
// div.appendChild(div2)
// div2.style.backgroundColor = "blue";
// div2.style.padding = "300px";
// div2.classList.add('classe1', 'classe2', 'classe3');
// div2.id = 'meuid';

const workspace = document.createElement("div");
const taskbar = document.createElement("div");
const startbtn = document.createElement("button");
const clock = document.createElement("button");

function basic() {
  //workspace
  document.body.appendChild(workspace);
  workspace.classList.add("workspace");
  //taskbar
  document.body.appendChild(taskbar);
  taskbar.classList.add("taskbar", "borda1");
  //botão iniciar
  taskbar.appendChild(startbtn);
  startbtn.classList.add("borda1");
  startbtn.id = "btniniciar";
  startbtn.addEventListener("click", function () {
    startbtn.classList.toggle("borda1");
    startbtn.classList.toggle("borda2");
  });
  //botão relogio
  taskbar.appendChild(clock);
  clock.id = "menuclock";
  clock.classList.add("borda2");
}

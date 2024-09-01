



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


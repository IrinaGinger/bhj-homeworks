const counter = document.getElementById("clicker__counter");
const averageClickSpeed = document.getElementById("click__speed");
const image = document.getElementById("cookie");
let previousClick = new Date();
let recentClick;
let clickTime;

function clickEvent() {
  let counterValue = Number(counter.textContent);

  recentclick = new Date();
  clickTime = (recentclick.getTime() - previousClick.getTime()) / 1000;
  averageClickSpeed.textContent = (1 / clickTime).toFixed(2);
  previousClick = recentclick;
  
  if (counterValue % 2 === 0) { 
    image.width += 20;
    image.height += 20;
  }
  else {
    image.width -= 20;
    image.height -= 20;
  }

  counterValue += 1;
  counter.textContent = counterValue;
};	

image.onclick = clickEvent;
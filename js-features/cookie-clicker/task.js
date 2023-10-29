const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function clickEvent() {
  let counterValue = Number(counter.textContent);
  
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
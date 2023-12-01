const tooltipElements = Array.from(document.getElementsByClassName("has-tooltip"));
let activeIndex;
document.querySelector('body').setAttribute("style", "position: relative");

tooltipElements.forEach((elem, index) => {
  let tooltip = document.createElement("div");
  let tooltipText = elem.getAttribute("title");
  
  tooltip.classList.add("tooltip");
  tooltip.textContent = tooltipText;
  
  elem.insertAdjacentHTML('afterEnd', tooltip.outerHTML);

  elem.addEventListener("click", (event) => {
    event.preventDefault();
    let position = elem.getBoundingClientRect();
    
    if ((activeIndex != undefined) && (activeIndex != index)) {
      tooltipElements[activeIndex].nextSibling.classList.remove("tooltip_active");
    }
    
    elem.nextSibling.setAttribute("style", `position: absolute; left: ${position.left}px`);
    elem.nextSibling.classList.toggle("tooltip_active");
    activeIndex = index;
  })
})

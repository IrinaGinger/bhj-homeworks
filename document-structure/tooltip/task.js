const tooltipElements = Array.from(document.getElementsByClassName("has-tooltip"));
let activeIndex;

tooltipElements.forEach((elem, index) => {
  let tooltip = document.createElement("div");
  let tooltipText = elem.getAttribute("title");
  
  tooltip.classList.add("tooltip");
  tooltip.textContent = tooltipText;

  elem.setAttribute("style", "position: relative")
  elem.appendChild(tooltip);

  elem.addEventListener("click", (event) => {
    event.preventDefault();
    let position = elem.getBoundingClientRect();

    if (activeIndex != undefined) {
      tooltipElements[activeIndex].firstChild.nextSibling.classList.remove("tooltip_active");
    }
    
    elem.firstChild.nextSibling.setAttribute("style", "position: absolute; top: 16; left: 0");
    elem.firstChild.nextSibling.classList.add("tooltip_active");
    activeIndex = index;
  })
})


window.addEventListener('scroll', function() {  
  function isVisible(pos) {
      const viewportHeight = window.innerHeight;
        
      return ((pos.top < viewportHeight) && (pos.bottom > 0)) ? true : false;
    }

    tooltipElements.forEach(element => {
      let position = element.getBoundingClientRect();

      if (!isVisible(position)) {
        element.firstChild.nextSibling.classList.remove("tooltip_active");
      }
    });
  })
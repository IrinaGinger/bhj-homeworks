const reveal = Array.from(document.getElementsByClassName("reveal"));
console.log(reveal);

window.addEventListener('scroll', function() {  
  function isActive(element) {
  	const viewportHeight = window.innerHeight;
    let position = element.getBoundingClientRect();

  	return ((position.top < viewportHeight) && (position.bottom > 0)) ? true : false;
  }
  
  reveal.forEach((element, index) => {
    if (isActive(element)) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
})
const fontSize = Array.from(document.getElementsByClassName("font-size"));
const color = Array.from(document.getElementsByClassName("color"));
const book = document.querySelector(".book");

let aktivIndexSize = 1;
let aktivIndexTextColor = 0;
let aktivIndexBackground = 5;

let aktivTextColor = "book_color-black";
let aktivBackground = "book_bg-white";

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener('click', 
    function(event) {
      event.preventDefault();
      
  	  if (!fontSize[i].classList.contains("font-size_active")) {
  	    fontSize[aktivIndexSize].classList.remove("font-size_active");
  	    fontSize[i].classList.add("font-size_active");

        if (fontSize[i].classList.contains("font-size_small")) {
          book.classList.remove("book_fs-big");
          book.classList.add("book_fs-small");
        } else {
          if (fontSize[i].classList.contains("font-size_big")) {
        	book.classList.remove("book_fs-small");
        	book.classList.add("book_fs-big");
	        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
	        }
	      }
	      aktivIndexSize = i; 
	    }
  	}
  )
}

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener('click', 
    function(event) {
      event.preventDefault();
      
  	  if (!color[i].classList.contains("color_active")) {
  	    color[i].classList.add("color_active");

        if (color[i].getAttribute("data-text-color") != null) {
          color[aktivIndexTextColor].classList.remove("color_active");
          aktivIndexTextColor = i; 

          book.classList.remove(aktivTextColor);
          aktivTextColor = "book_color-" + color[i].dataset.textColor;
          book.classList.add(aktivTextColor);
        }

        if (color[i].getAttribute("data-bg-color") != null) {
          color[aktivIndexBackground].classList.remove("color_active");
          aktivIndexBackground = i; 

          book.classList.remove(aktivBackground);
          aktivBackground = "book_bg-" + color[i].dataset.bgColor;
          book.classList.add(aktivBackground);
        }
      }
  	}
  )
}
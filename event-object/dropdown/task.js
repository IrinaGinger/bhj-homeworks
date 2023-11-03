const dropdownMenu = Array.from(document.getElementsByClassName("dropdown__value"));
const dropdownList = Array.from(document.getElementsByClassName("dropdown__list"));
const elementsList = Array.from(document.getElementsByClassName("dropdown__link"));

dropdownMenu.forEach((element, index) => {
  element.onclick = () => 
    dropdownList[index].classList.toggle("dropdown__list_active");

    elementsList.forEach((item) => 
    item.addEventListener('click', 
      function(event) {
        event.preventDefault();
        dropdownMenu[index].textContent = item.textContent;
        dropdownList[index].classList.toggle("dropdown__list_active");
    }));
});



const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
modalMain.className = "modal modal_active";

// закрытие активного окна
const modalCloseElements = Array.from(document.getElementsByClassName("modal__close"));
modalCloseElements.forEach(element => 
  element.onclick = () => 
    element.closest(".modal_active").className = "modal");

// показ окна #modal_success
const showSuccessElements = Array.from(document.getElementsByClassName("show-success"));
showSuccessElements.forEach(element => 
  element.onclick = () => {
    modalMain.className = "modal";    // искусственно добавленная команда
    modalSuccess.className = "modal modal_active";
});  
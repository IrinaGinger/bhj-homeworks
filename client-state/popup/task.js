const modal = document.getElementById("subscribe-modal");

// получение значения куки
function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    cookieValue = parts.pop().split(";").shift();
    return cookieValue;
  }
}

// показ всплывающего окна при отсутствии куки
if (!getCookie('closed')) {
  modal.classList.add("modal_active");
}

// закрытие всплывающего окна
const modalCloseElement = document.getElementsByClassName("modal__close")[0];

modalCloseElement.addEventListener('click', () => { 
  document.cookie = 'closed=' + encodeURIComponent('true');   // сохранение куки
  
  modalCloseElement.closest(".modal_active").classList.remove("modal_active");
});
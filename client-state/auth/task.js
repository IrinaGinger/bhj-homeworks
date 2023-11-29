const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');

function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    cookieValue = parts.pop().split(";").shift();
    return cookieValue;
  }
}

function welcomeId(id) {
  const welcome = document.getElementById('welcome');
  const userId = document.getElementById('user_id');

  signin.classList.remove("signin_active");

  welcome.classList.add("welcome_active");
  userId.textContent = id;
}

let userId = getCookie('storedId');

if (!userId) {
  signin.classList.add("signin_active");

  signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(signinForm);
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText);

        if (response.success) {
          welcomeId(response.user_id);

          document.cookie = 'storedId=' + encodeURIComponent(response.user_id);
        } else {
          alert("Неверный логин/пароль");
        }
      }
    })
  })  
} else {
  welcomeId(userId);
}





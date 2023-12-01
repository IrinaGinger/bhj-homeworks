const progress = document.getElementById('progress');
const formInputFile = document.getElementById('form');
const fileDesc = document.querySelector(".input__wrapper-desc");

formInputFile.addEventListener('submit', (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event) => {
    let percentLoaded = event.loaded / event.total;
    progress.value = percentLoaded.toFixed(2);
  }, false);

  xhr.addEventListener('load', (event) => {
    progress.value = 0;
    fileDesc.textContent = "Имя файла...";
    alert("Загрузка завершена");
  }, false);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(e.currentTarget);
  xhr.send(formData);
});
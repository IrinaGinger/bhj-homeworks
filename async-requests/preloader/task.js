const loaderImg = document.getElementById('loader');
const currencyItems = document.getElementById('items');

let xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    loaderImg.classList.remove('loader_active');

    let currensyList = JSON.parse(xhr.responseText).response.Valute;
        
    for (let key in currensyList) {
      let item = document.createElement("div");
      item.classList.add("item");

      let itemCode = document.createElement("div");
      itemCode.classList.add("item__code");
      itemCode.textContent = currensyList[key].CharCode;
      item.appendChild(itemCode);

      let itemValue = document.createElement("div");
      itemValue.classList.add("item__value");
      itemValue.textContent = currensyList[key].Value;
      item.appendChild(itemValue);

      item.insertAdjacentHTML("beforeEnd", `<div class="item__currency">руб.</div>`);

      currencyItems.appendChild(item);
    }
  }
});

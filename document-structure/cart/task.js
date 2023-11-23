const bag = document.getElementsByClassName("cart__products");

const quantityControl = Array.from(document.getElementsByClassName("product__quantity-control"));
const productImages = Array.from(document.getElementsByClassName("product__image"));
const productTitle = Array.from(document.getElementsByClassName("product__title"));
const productQuantity = Array.from(document.getElementsByClassName("product__quantity-value"));
const btnProductAdd = Array.from(document.getElementsByClassName("product__add"));

const productCart = document.createElement("div");
productCart.classList.add("cart__product");
productCart.dataset.id = "";
productCart.insertAdjacentHTML("afterBegin", `<img class="cart__product-image" src="">`);
productCart.insertAdjacentHTML("beforeEnd", `<div class="cart__product-count"></div>`);

let productsSelected = [];

quantityControl.forEach((element, index) => {
  element.addEventListener("click", () => {
    let productIndex = Math.floor(index / 2);
    
    if (element.classList.contains("product__quantity-control_inc")) {
      productQuantity[productIndex].textContent = Number(productQuantity[productIndex].textContent) + 1;
    } else {
      if (Number(productQuantity[productIndex].textContent) > 1) {
        productQuantity[productIndex].textContent = Number(productQuantity[productIndex].textContent) - 1;
      }
    }  
  })
})

btnProductAdd.forEach((element, index) => {
  element.addEventListener("click", () => {
    let productList = Array.from(document.getElementsByClassName("cart__product"));
    let productSelectedTitle = productTitle[index].textContent;
    let productSelectedQuantity = Number(productQuantity[index].textContent);

    let cartPosition = productsSelected.findIndex((elem, i) => {
      return productsSelected[i].productSelectedTitle === productSelectedTitle;
    })
    console.log(cartPosition);

    if (cartPosition >= 0) {
      productSelectedQuantity = productsSelected[cartPosition].productSelectedQuantity + productSelectedQuantity;
      console.log(productSelectedQuantity);
      productsSelected.splice(cartPosition, 1, { productSelectedTitle, productSelectedQuantity });
      console.log(productsSelected);
      console.log(productList);
      productList[cartPosition].firstChild.nextElementSibling.textContent = productSelectedQuantity;

      
    } else {
      productsSelected.push({ productSelectedTitle, productSelectedQuantity });   
      console.log(productsSelected);

      let productCartForAdd = productCart.cloneNode(true);
      productCartForAdd.dataset.id = productTitle[index].closest(".product").dataset.id;
      productCartForAdd.firstChild.setAttribute("src", productImages[index].getAttribute("src"));
      productCartForAdd.firstChild.nextElementSibling.textContent = productSelectedQuantity;
      bag[0].appendChild(productCartForAdd);
    }
    
  })
})
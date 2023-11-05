const tab = Array.from(document.getElementsByClassName("tab"));
const tabContent = Array.from(document.getElementsByClassName("tab__content"));

let tabLength = tab.length;
let aktivIndex = 0;

for (let i = 0; i < tabLength; i++) {
  tab[i].addEventListener('click', () => {
    if (!tab[i].classList.contains("tab_active")) {
      tab[i].classList.add("tab_active");
      tabContent[i].classList.add("tab__content_active");
      tab[aktivIndex].classList.remove("tab_active");
      tabContent[aktivIndex].classList.remove("tab__content_active");
      aktivIndex = i;
    }
  })
}

let i = 0;
let totalDelay;
const ads = Array.from(document.getElementsByClassName("rotator__case"));

function switchElement(i) {
  ads[i].classList.remove("rotator__case_active");
  i = (i + 1) % ads.length;
  ads[i].classList.add("rotator__case_active");
  ads[i].style.color = ads[i].dataset.color;

  setTimeout(switchElement, Number(ads[i].dataset.speed), i);
}
  
ads[i].style.color = ads[i].dataset.color;
setTimeout(switchElement, Number(ads[i].dataset.speed), i);

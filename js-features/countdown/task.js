const timerCount = document.getElementById("timer");
const maxValue = timerCount.textContent;

let countdown = function(timerCount) {
  timerCount.textContent -= 1;
  if (timerCount.textContent == 0) {
    alert('Вы победили в конкурсе!');
    // return;
  }
} 
  
let timerId = setInterval(countdown, 1000, timerCount);
setTimeout(() => clearInterval(timerId), maxValue * 1000);

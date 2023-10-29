const timerCount = document.getElementById("timer");
const maxValue = timerCount.textContent;
let timerValue = new Date(0, 0, 0, 0, 0, maxValue);

let countdown = function() {
  timerValue.setTime(timerValue.getTime() - 1000);
  timerCount.textContent = timerValue.toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  if (timerValue.getSeconds() === 0) {
    alert('Вы победили в конкурсе!');
  } 
} 
  
let timerId = setInterval(countdown, 1000);
setTimeout(() => clearInterval(timerId), maxValue * 1000);



const getHole = index => document.getElementById(`hole${index}`),
killed = document.getElementById("dead"),
lost = document.getElementById("lost");

function startValue() {
  killed.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = (() => {
    if (hole.className.includes('hole_has-mole')) {
      killed.textContent++;
      if (Number(killed.textContent) === 10) {
        alert("Вы выиграли");
        startValue();
      }
    }
    else {
      lost.textContent++;
      if (Number(lost.textContent) === 5) {
        alert("Вы проиграли");
        startValue();
      }
    }
  });
}
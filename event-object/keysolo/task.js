class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerCount = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer(seconds) {
    this.timerCount.textContent = seconds;
    let now = new Date;                                 //убрать
    let newTime;                                        //убрать

    function countdown() {
      console.log(thisObject.timerCount.textContent);  //убрать
      newTime = new Date;                              //убрать
      console.log(newTime - now);                      //убрать
      now = newTime;                                   //убрать

      if (Number(thisObject.timerCount.textContent) === 0) {
        // alert("Время вышло");
        console.log("Время вышло");                //убрать
        thisObject.fail();
        clearTimeout(timerId);
        return;
      } 

      thisObject.timerCount.textContent = thisObject.timerCount.textContent - 1;
      timerId = setTimeout(countdown, 1000);
    }

    let thisObject = this;
    let timerId = setTimeout(countdown, 1000);
    

    // let timerId = setInterval(countdown, 1000);
    // if (Number(thisObject.timerCount.textContent) === 0) {
    //   clearInterval(timerId);
    //   alert("Время вышло");
    //   thisObject.fail();
    // } 

    // setTimeout(() => clearInterval(timerId), seconds * 1000);
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
    
    function keysCompare(event) {
      if (event.key.toLowerCase() === thisObject.currentSymbol.textContent.toLowerCase()) {
        thisObject.success();
        } else {
          thisObject.fail();
        }
      }
  
    let thisObject = this;
    document.addEventListener('keypress', keysCompare);
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
    }

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      console.log('Вы проиграли!');                      //убрать
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.timer([...word].length);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');    
  }
}

new Game(document.getElementById('game'));


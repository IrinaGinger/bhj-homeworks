const pollContainer = document.getElementsByClassName('poll')[0];

const pollTitleElement = document.getElementById('poll__title');
const pollAnswersElement = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let poll = JSON.parse(xhr.responseText);
    let pollId = poll.id;
    let pollTitle = poll.data.title;
    let pollAnswers = poll.data.answers; 
    
    let button = [];

    pollTitleElement.textContent = pollTitle;

    for (let i = 0; i < pollAnswers.length; i++) {
      button[i] = document.createElement("button");
      button[i].classList.add("poll__answer");
      button[i].textContent = pollAnswers[i];
      button[i].style.marginRight = "5px";
      pollAnswersElement.appendChild(button[i]);
      
      button[i].addEventListener('click', (event) => {
        event.preventDefault();

        alert("Спасибо, ваш голос засчитан!");

        let xhrResult = new XMLHttpRequest();
        let resultElement = [];

        xhrResult.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', );
        xhrResult.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
        xhrResult.send(`vote=${pollId}&answer=${i}`);

        xhrResult.addEventListener('readystatechange', () => {
          if(xhrResult.readyState === xhr.DONE) {
            let result = JSON.parse(xhrResult.responseText).stat;

            pollTitleElement.remove();
            pollAnswersElement.remove();
            
            for (let j = 0; j < result.length; j++) {
              resultElement[j] = document.createElement("div");
              let resultAnswer = document.createElement("span");
              let resultVotes = document.createElement("span");

              resultAnswer.textContent = result[j].answer + ": ";
              resultVotes.textContent = result[j].votes + "%";
              resultVotes.style.fontWeight = "bold";

              resultElement[j].appendChild(resultAnswer);
              resultElement[j].appendChild(resultVotes);
             
              pollContainer.appendChild(resultElement[j]);
            }  
          }
        })
      })
    }
  }
})

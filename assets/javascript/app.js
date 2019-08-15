$(document).ready();

let counter = 10;
let timer;
let currentQuestion = 0;

function timeUp() {
  clearInterval(timer);
}

function downTimer() {
  counter--;
  $("#timer").html("<h2>" + counter + "</h2>");

  if (counter === 0) {
    timeUp();
  }

}

function nextQuestion() {

  const QuesOver = (QnA.length - 1) === currentQuestion;
  if (QuesOver) {
    console.log("Game is Over");
  }
  else {
    currentQuestion++;
    tQuestion();
  }

};

function tQuestion() {

  counter = 10;
  timer = setInterval(downTimer, 1000);

  const questions =QnA[currentQuestion].question;
  const answers = QnA[currentQuestion].options;

  currentQuestion = $("#triviaGame").html("<h4>" + questions + "</h4>" + getChoice(answers));

}


nextQuestion();

function getChoice(answers) {
  let result = '';

  for (let i = 0; i < answers.length; i++) {
    result += `<input type="radio" data-answer="${answers[i]}">${answers[i]}`;
  }

  return result;
}

$(document).on("click", '.option', function () {

});

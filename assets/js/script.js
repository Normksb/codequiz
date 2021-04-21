//asign all of the elements that need to be manipulated to variables using get element by ID.
var viewHighScoresButton = document.getElementById("view-highscores");
var timeLeft = document.getElementById("time-left");
var quizIntroTextSection = document.getElementById("quiz-intro-text");
var startQuizButton = document.getElementById("start-quiz");
var theQuizSection = document.getElementById("the-quiz");
var answerButton1 = document.getElementById("answer-1");
var answerButton2 = document.getElementById("answer-2");
var answerButton3 = document.getElementById("answer-3");
var answerButton4 = document.getElementById("answer-4");
var highScoresSection = document.getElementById("highscores")
var questionText = document.getElementById("question-text");
var submitNameButton = document.getElementById("submitname");
var userName = document.getElementById("name");
var score = document.getElementById("score");

// Start the value to use for the timer to 75 seconds.
// set the current score to 0 and the current question to 0. Setting the current question to 0 will match the array index for the 1st question.
var secondsLeft = 75;
var currentScore = 0;
var currentQuestion = 0;

// create an array of objects, each question is an object in the array.
var questions = [
    {
        question: "Javascript first appeared in the year...",
        answer1: "1995",
        answer2: "2005",
        answer3: "2015",
        answer4: "2020",
        correctAnswer: "1"
    },
    {
        question: "The N in JSON stands for...",
        answer1: "Node",
        answer2: "Notation",
        answer3: "Number",
        answer4: "Niche",
        correctAnswer: "2"
    },
    {
        question: "Which of the following is not an arithmetic operator?",
        answer1: "+",
        answer2: "-",
        answer3: "&",
        answer4: "%",
        correctAnswer: "3"
    },
    {
        question: "Which of the following is not a primitive data type?",
        answer1: "undefined",
        answer2: "boolean",
        answer3: "number",
        answer4: "object",
        correctAnswer: "4"
    }    
    
]

// add a click event listener to the quiz start button.
startQuizButton.addEventListener("click", startQuiz)
// answerButton1.addEventListener("click", checkAnswer(1))
// answerButton2.addEventListener("click", checkAnswer(2), true)
// answerButton3.addEventListener("click", checkAnswer(3), false)
// answerButton4.addEventListener("click", checkAnswer(4), false)

// start the quiz timer, run at an interval of every 1 second to decrement the time left and stop the timer when it reaches 0.
function quizTimer(){
    var timer = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time: " + secondsLeft
    
    if(secondsLeft < 1) {
      clearInterval(timer);
      timeLeft.textContent = "Time: 0"
      highScoresSection.style.display="block";
      theQuizSection.style.display="none";

    }
  }, 1000);
}

// invoke the quizTimer and displayQuestion functions and display the quiz section
function startQuiz(){
    theQuizSection.style.display="block";
    quizIntroTextSection.style.display="none";
    quizTimer();
    displayQuestion();
}

// Place the question text into the h2 element and the answer options into the corresponding buttons.
function displayQuestion(){
    console.log(currentScore)
    console.log(questions[currentQuestion])
    questionText.textContent = questions[currentQuestion].question
    answerButton1.textContent = questions[currentQuestion].answer1
    answerButton2.textContent = questions[currentQuestion].answer2
    answerButton3.textContent = questions[currentQuestion].answer3
    answerButton4.textContent = questions[currentQuestion].answer4

}

// assign the entire section labbeled the-quiz to a vairable and attach an event listener for click to the entire section. Use the event click object to determine if the click actually occurred on a button. If it didn't, exit the function. If the click did happen on a button, then invoke the checkanswer function and pass it a parameter that identifies the data-answer of the button in question.
var wrapper = document.getElementById('the-quiz');
wrapper.addEventListener('click', function(event) {
  var isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  var answerid = event.target.dataset.answer;
  checkAnswer(answerid);
})

// evaluate the correctness of the answer using the answerid from the wrapper event listener function and compare it to the correctanswer found in the corresponding array of question objects. adjust the score and the time left as appropriate and then call displayQuestion again to display the next question.
function checkAnswer(answerid){
    if(answerid==questions[currentQuestion].correctAnswer){
        currentScore = currentScore+10
    }
    else{
        secondsLeft = secondsLeft-10;
    }
    currentQuestion++
    score.textContent = "Score: " + currentScore
    displayQuestion()
}

// function checkAnswer1(){
//     if(questions[currentQuestion].correctAnswer==1){
//         currentScore=currentScore+10;
//     }
//     console.log(currentScore);
// }

// function checkAnswer2(){
//     if(2==questions[currentQuestion].correctAnswer){
//         currentScore=currentScore+10;
//     }
//     console.log(currentScore);
// }

// function checkAnswer3(){
//     if(3==questions[currentQuestion].correctAnswer){
//         currentScore=currentScore+10;
//     }
//     console.log(currentScore);
// }

// function checkAnswer4(){
//     if(4==questions[currentQuestion].correctAnswer){
//         currentScore=currentScore+10;
//     }
//     console.log(currentScore);
// }

var highscoresStorage = []

submitNameButton.addEventListener("click", saveHighscore)

function saveHighscore(event){
    event.preventDefault()
    var name=userName.value
    console.log(name)
    if(name===""){
        alert("please enter a name")
    } else{
        highscoresStorage.push(name)
        highscoresStorage.push(currentScore)
        localStorage.setItem("SavedHighscores",highscoresStorage)
    }
}
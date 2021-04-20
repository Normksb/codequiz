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

var secondsLeft = 75;
var currentScore = 0;

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
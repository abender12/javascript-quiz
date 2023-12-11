// Variables
var startBtn = document.querySelector(".start-quiz");
var quizIntroSection = document.getElementById("quiz-intro");
var timerEl = document.querySelector(".timer");

var index = 0;
var timeLeft = 59;

// Array of questions
var questionsAsked = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "1. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly braces", "3. parenthesis", "4. square brackets"],
        answer: "2. curly braces"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly braces", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },
]

// Timer
function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}
console.log(countdown());

// Start Quiz - when the user clicks the start button, the timer starts, and the first question appears and the quiz intro disappears.
function startQuiz() {
    countdown ();
    // First Question Appears

    // Hide start text
    document.getElementById("quiz-intro").classList.remove("show");
    document.getElementById("quiz-intro").classList.add("hidden");
}
startBtn.addEventListener('click',startQuiz);

// When the correct answer is clicked, correct shows up underneath and the next question appears.
// When the wrong answer is clicked, wrong shows up underneath, 15 seconds is subtracted from the timer, and the next question appears.

// The game ends when all questions are answered OR when the timer reaches 0.
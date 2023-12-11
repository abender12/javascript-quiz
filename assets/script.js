// Variables
var startBtn = document.querySelector(".start-quiz");
var quizIntroSection = document.getElementById("quiz-intro");
var timerEl = document.querySelector(".timer");

var index = 0;
var timeLeft = 59;

// Array of questions
var questionsAsked = [
    {
        question: "insert question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "correct answer"
    },
    {
        question: "insert question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "correct answer"
    },
    {
        question: "insert question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "correct answer"
    },
    {
        question: "insert question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "correct answer"
    },
    {
        question: "insert question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "correct answer"
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
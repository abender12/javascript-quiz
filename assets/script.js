var quizIntro = document.querySelector("quiz-intro");
var questions = document.querySelector("questions");
var quizFinished = document.querySelector("quiz-finished");
var highScoreScreen = document.querySelector("high-scores-screen");
var initialsForm = document.querySelector("form-initals");
var timer = document.querySelector("timer");
var listHighScores = document.querySelector("high-scores-list");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
// Buttons
var startBtn = document.querySelector("start-quiz");
var goBackBtn = document.querySelector("go-back");
var clearScoresBtn = document.querySelector("clear-scores");
// Questions and Answers
var questions = document.querySelector("question-ask");
var answerBtns = document.querySelector("answers-btn");
var score = 0;
var timeLeft;
var gameover
timerEl.innerText = 0;

// High Scores
var highScores = [];

// Randomize questions
var shuffleQuestions
var questionIndex = 0

// Questions that can be asked and their answers
var questionsAsked = [
    {   q: 'Commonly used datat types DO NOT include:'
        a: '3. alerts'
        choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'},]
    },
    {   q: 'The condition in an if / else statement is enclosed within ____.'
        a: '2. curly braces'
        choices: [{choice: '1. quotes'}, {choice: '2. curly braces'}, {choice: '3. paranthesis'}, {choice: '4. square brackets'},]
    },
    {   q: 'Commonly used datat types DO NOT include:'
        a: '3. alerts'
        choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'},]
    },
    {   q: 'Commonly used datat types DO NOT include:'
        a: '3. alerts'
        choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'},]
    },
    {   q: 'Commonly used datat types DO NOT include:'
        a: '3. alerts'
        choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'},]
    },
]
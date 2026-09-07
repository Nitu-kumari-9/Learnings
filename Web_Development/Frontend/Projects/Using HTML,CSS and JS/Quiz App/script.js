
// Quiz Questions

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is used to make webpages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "variable",
            "var",
            "define",
            "declare"
        ],
        answer: 1
    },

    {
        question: "Which method is used to select an element by ID?",
        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],
        answer: 0
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "##",
            "<!-- -->",
            "//",
            "**"
        ],
        answer: 2
    },

    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()",
            "JSON.toObject()"
        ],
        answer: 0
    },

    {
        question: "Which keyword creates a constant in JavaScript?",
        options: [
            "let",
            "var",
            "constant",
            "const"
        ],
        answer: 3
    },

    {
        question: "Which method adds an event listener to an element?",
        options: [
            "addEvent()",
            "addEventListener()",
            "eventListener()",
            "listenEvent()"
        ],
        answer: 1
    },

    {
        question: "Which storage can save data in the browser?",
        options: [
            "localStorage",
            "browserStorageOnly",
            "webStorageSQL",
            "sessionDatabase"
        ],
        answer: 0
    }
];


// Variables

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let timeLeft = 15;

let timer;


// HTML Elements

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const scoreElement = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");


// Start Quiz

function startQuiz() {

    currentQuestion = 0;
    score = 0;

    quizSection.classList.remove("hidden");
    resultSection.classList.add("hidden");

    showQuestion();
}


// Show Question

function showQuestion() {

    clearInterval(timer);
    selectedAnswer = null;
    nextButton.disabled = true;

    const questionData = questions[currentQuestion];


    // Question

    questionElement.textContent =
        questionData.question;


    // Question number

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    // Progress

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    // Clear previous options

    optionsContainer.innerHTML = "";


    // Create options

    questionData.options.forEach((option, index) => {

        const button =
     document.createElement("button");

        button.classList.add("option");

        button.textContent = option;


        button.addEventListener(
            "click",
            () => selectAnswer(button, index)
        );


        optionsContainer.appendChild(button);

    });


    // Start timer

    startTimer();
}


// Select Answer

function selectAnswer(button, index) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const correctAnswer =
        questions[currentQuestion].answer;


    const allOptions =
 document.querySelectorAll(".option");


    // Disable all options

    allOptions.forEach(option => {

        option.style.pointerEvents = "none";

    });


    // Correct answer

    if (index === correctAnswer) {

        button.classList.add("correct");

        score++;

    }

    // Wrong answer

    else {

        button.classList.add("wrong");

        allOptions[correctAnswer]
            .classList.add("correct");

    }


    nextButton.disabled = false;

    clearInterval(timer);
}


// Timer

function startTimer() {

    timeLeft = 15;

    timerElement.textContent =
        `Time: ${timeLeft}s`;


    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent =
            `Time: ${timeLeft}s`;


        if (timeLeft === 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);
}


// Time Up

function timeUp() {

    selectedAnswer = -1;

    const correctAnswer =
        questions[currentQuestion].answer;


    const allOptions =
 document.querySelectorAll(".option");


    allOptions.forEach(option => {

        option.style.pointerEvents = "none";

    });


    // Show correct answer

    allOptions[correctAnswer]
        .classList.add("correct");


    nextButton.disabled = false;
}


// Next Question

nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

});


// Show Result

function showResult() {

    clearInterval(timer);

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");


    scoreElement.textContent =
        `${score} / ${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "Excellent! Perfect Score ";

    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "Great job! You did very well ";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "Good attempt! Keep practicing ";

    }

    else {

        resultMessage.textContent =
            "Keep learning and try again ";

    }

}


// Restart Quiz

restartButton.addEventListener(
    "click",
    startQuiz
);


// Start Application

startQuiz();


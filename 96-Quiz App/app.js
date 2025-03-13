 
const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "Which is the largest planet?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: 1 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"], answer: 0 },
    { question: "What is 5 + 3?", options: ["5", "8", "10", "15"], answer: 1 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
}

window.onload = loadQuestion;

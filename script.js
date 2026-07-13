// =========================
// Quiz Section
// =========================

const quiz = [

    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: 1
    },

    {
        question: "Which keyword declares a variable in JavaScript?",
        answers: ["let", "style", "body", "font"],
        correct: 0
    },

    {
        question: "Which HTML tag is used for a hyperlink?",
        answers: ["<img>", "<a>", "<h1>", "<table>"],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("score");

function loadQuestion() {

    question.textContent = quiz[currentQuestion].question;

    answers.innerHTML = "";

    quiz[currentQuestion].answers.forEach((answer, index) => {

        const btn = document.createElement("button");

        btn.textContent = answer;

        btn.onclick = function () {

            if (index === quiz[currentQuestion].correct) {
                score++;
            }

            nextBtn.style.display = "block";

        };

        answers.appendChild(btn);

    });

    nextBtn.style.display = "none";

}

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion < quiz.length) {

        loadQuestion();

    }

    else {

        question.textContent = "Quiz Completed!";

        answers.innerHTML = "";

        nextBtn.style.display = "none";

        scoreText.textContent = "Your Score: " + score + " / " + quiz.length;

    }

}

loadQuestion();


// =========================
// Fetch API Section
// =========================

async function getJoke() {

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    const data = await response.json();

    document.getElementById("joke").innerHTML =
        "<strong>" + data.setup + "</strong><br><br>" + data.punchline;

}
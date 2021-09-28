const quizForm = document.querySelector(".quiz-form");

const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const outputEl = document.querySelector("#output");

const correctAnswers = ["90", "Right Angle", "Acute", "Obtuse", "180"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    console.log(formResults);

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index++;
    }
    outputEl.innerText = "Your score is: " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
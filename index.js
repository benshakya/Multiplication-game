const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const submitEl = document.getElementById("submit-btn");
const resetEl = document.querySelector(".reset-btn");
const msgEl = document.querySelector(".msg");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;

// Question
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

let correctAns = num1 * num2;

//Answer check on submission
submitEl.addEventListener("click", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

//Use enter key as submit
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitEl.click();
  }
});

//Storing score on local storage
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

//styling the score
if (score < 0) {
  scoreEl.style.color = "red";
}

//Resetting the score
resetEl.addEventListener("click", () => {
  localStorage.removeItem("score");
});

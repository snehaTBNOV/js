const questionsDiv = document.getElementById("questions");
const scoreDiv = document.getElementById("score");
const submitButton = document.getElementById("submit-button");

let score = 0;
let questionsData = [];

async function fetchQuestions() {
  try {
    const response = await fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz");
    const data = await response.json();
    questionsData = data;
    showQuestions();
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

function createQuestionElement(question) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionElement.appendChild(questionText);

  const choicesDiv = document.createElement("div");
  choicesDiv.classList.add("choices");

  question.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = `choice-${question.id}`;
    radioInput.value = optionIndex;
    label.appendChild(radioInput);
    label.appendChild(document.createTextNode(option));
    choicesDiv.appendChild(label);
  });

  questionElement.appendChild(choicesDiv);
  return questionElement;
}

function showQuestions() {
  questionsDiv.innerHTML = "";

  questionsData.forEach((question) => {
    const questionElement = createQuestionElement(question);
    questionsDiv.appendChild(questionElement);
  });
}

submitButton.addEventListener("click", function () {
  score = 0;

  questionsData.forEach((question) => {
    const selectedChoice = document.querySelector(`input[name='choice-${question.id}']:checked`);
    if (selectedChoice !== null && parseInt(selectedChoice.value) === question.answer) {
      score++;
    }
  });

  scoreDiv.textContent = `${score} / ${questionsData.length}`;
});

fetchQuestions();
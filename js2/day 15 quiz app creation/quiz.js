const quizForm = document.getElementById("quiz-form");
const questionsDiv = document.getElementById("questions");
const scoreDiv = document.getElementById("score");
const submitButton = document.getElementById("submit-button");

let score = 0;

const questionsData = [
  {
    
    answer: 3,
    question: "Which was not one of Voldemort's Horcruxes?",
    options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"]
  },
  {
    
    answer: 1,
    question: "Which of these are not one of Hagrid's many pets?",
    options: ["Grawp", "Fluffy", "Aragog", "Noberta"]
  },
  {
   
    answer: 2,
    question: "Which class did Severus Snape always want to teach?",
    options: ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"]
  },
  {
    
    answer: 1,
    question: "Which Hogwarts house did Moaning Myrtle belong in?",
    options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
  },
  {
   
    answer: 1,
    question: "What class did Neville end up teaching at Hogwarts?",
    options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"]
  }
];

function showQuestions(){
    questionsDiv.innerHTML="";

    for(let index=0;index<questionsData.length;index++){
        const question=questionsData[index]
        const questionElement=document.createElement("div")
        questionElement.classList.add("question")

        const questionText=document.createElement("p")
        questionText.textContent=`${index+1}.${question.question}`;
        questionElement.appendChild(questionText)

       


        const choicesDiv = document.createElement("div");
    choicesDiv.classList.add("choices");

    for (let optionIndex=0;optionIndex<question.options.length;optionIndex++){
        const option=question.options[optionIndex]
        const label=document.createElement("label")
        const radioInput=document.createElement("input");
        radioInput.type="radio"
        radioInput.name=`choice-${index}`
        radioInput.value=optionIndex
        label.appendChild(radioInput)
        label.appendChild(document.createTextNode(option))
        choicesDiv.appendChild(label)
    }
    questionElement.appendChild(choicesDiv);
    questionsDiv.appendChild(questionElement)
    }


}



quizForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
  
    score = 0; // Initialize the score to 0
  
    // Loop through each question
    for (let index = 0; index < questionsData.length; index++) {
      const selectedChoice = document.querySelector(`input[name='choice-${index}']:checked`);
      const question = questionsData[index];
      
      // Check if a choice is selected and it matches the correct answer
      if (selectedChoice !== null && parseInt(selectedChoice.value)=== question.answer) {
        score++; // Increment the score if the answer is correct
      }
    }
  
    scoreDiv.textContent = `${score} / ${questionsData.length}`; // Display the calculated score
  });
   
  
  
  
  
// //When the form is submitted

// function calculateScore() {
//   score = 0;
//   questionsData.forEach((question, index) => {
//     const selectedChoice = document.querySelector(`input[name='choice-${index}']:checked`);
//     if (selectedChoice && parseInt(selectedChoice.value) === question.answer) {
//       score++;
//     }
//   });
// }

// function showScore() {
//   scoreDiv.textContent = score;
// }

// quizForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   calculateScore();
//   showScore();
// });

 showQuestions();
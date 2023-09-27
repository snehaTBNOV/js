const container =document.querySelector(".container");
const  questionBox=document.querySelector(".question")
const choicesBox=document.querySelector(".choices")
const nextBtn = document.querySelector(".nextBtn");
const scorecard = document.querySelector(".scorecard");

//make an array of object that stores qstn, choices,ans
const quiz=[
    {
        question:"Q. which is the largest animal in the world?",
        choices:["shark","elephant","bluewhale","giraffe"],
        answer:"bluewhale"
    },
    {
        question:"Q. which is the largest planet?",
        choices:["mercury","mars","saturn","jupiter"],
        answer:"jupiter"  
    },
    {
        question:"Q. which is the largest desert in the world",
        choices:["sahara","thar","antartic","artic"],
        answer:"sahara"
    },
    {
        question:"Q. which is the most populous country in the world?",
        choices:["india","china","japan","bhutan"],
        answer:"india"
    }
]

//creating variables
let currentqstnindex=0
let score=0;

//arrow function to check qstns
const showQuestion = () => {
    // console.log("qqq");
    const questiondetails=quiz[currentqstnindex]
    //console.log(questiondetails)
    questionBox.textContent=questiondetails.question
    choicesBox.textContent="" //to clear 
    for(let i=0;i<questiondetails.choices.length;i++){
      const currentchoice=questiondetails.choices[i]
      const choicediv=document.createElement("div")
      choicediv.classList.add("choice")//to add individuall css to the choices
      choicediv.textContent=currentchoice
      choicesBox.appendChild(choicediv)// u will get options.so every click u will get 4+4+4 option addding on . to avoid tht clear previous
    
     choicediv.addEventListener('click',()=>{
        if(choicediv.classList.contains('selected')){
            choicediv.classList.remove('selected')
        }else{
            choicediv.classList.add('selected')
        }

     })
    
    }
    
};



//function to check answers
const checkanswer=()=>{
    const selectedchoice=document.querySelector('.choice.selected')
    if(selectedchoice.textContent===quiz[currentqstnindex].answer){
        alert("correcr")
        score++
    }else{
        alert("wrong")
    } //to check answers
    // console.log(selectedchoice)
    currentqstnindex++
    if (currentqstnindex<quiz.length){
        
        showQuestion();
    }else{
        showscore()
    }
}

//function to show score
const showscore=()=>{
    //to show only score card
    questionBox.textContent=""
    choicesBox.textContent=""
    
   scorecard.textContent=`you scored ${score} out of ${quiz.length}` 
   nextBtn.textContent="Play Again" //if u click ply again it should start from 0 ,
   nextBtn.addEventListener('click',() =>{
         currentqstnindex=0;
          showQuestion()
           //to remove scorecard marks
          nextBtn.textContent="Next"
          scorecard.textContent=""
   })
  
   
}

showQuestion();
nextBtn.addEventListener('click', () => {
    const selectedchoice=document.querySelector('.choice.selected')
    if(!selectedchoice && nextBtn.textContent==="Next"){
        alert("selct ur ans")
        return
    }else{
    checkanswer()
    }
});

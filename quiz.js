const quizQuestions = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const results = document.getElementById('results');
const newGame = document.getElementById('newGame');
const userName = document.getElementById('name');
const heading = document.querySelector('span');

const questions = [{
    question: 'who is the current t20 captain of India ?' ,
    options:{
           a: "virat kohli",
           b: "rohit sharma",
           c: "K L rahul"
    },
    answer: "a"
},
{
    question: "who is the current vice captain of t20 team?",
    options: {
           a: "MS dhoni",
           b: "virat kohli",
           c: "rohit sharma"
    },
    answer: "c"
},
{
    question: "who is the current coach of indian team?",
    options: {
           a: "MS dhoni",
           b: "ravi shastri",
           c: "rohit sharma"
    },
    answer: "b"
},
{
    question: "amongst all , who is a leg spinner?",
    options: {
           a: "chahal",
           b: "kuldeep",
           c: "bumrah"
    },
    answer: "a"
},
{
    question: "virat kohli belongs to which IPL team?",
    options: {
           a: "SRH",
           b: "CSK",
           c: "RCB"
    },
    answer: "c"
},
];

function startQuiz() {
    const output = [];
  
    
    questions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (key in currentQuestion.options) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${key}">
              ${key} :
              ${currentQuestion.options[key]}
            </label>`
        );
      }
  
      console.log(answers);
  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    });
    console.log(output);
    quizQuestions.innerHTML = output.join("");
   
  
};
  
  function showResults() {
    results.style.height = "15vh";
    const answerContainers = quizQuestions.querySelectorAll(".answers");
  
    let score = 0;

    questions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === currentQuestion.answer) {
        score++;

        answerContainers[questionNumber].style.color = "lightgreen";
      }   
      else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
  
    results.innerHTML = `YAY! You got ${score} out of ${questions.length} correct!`;
  }
  startQuiz();
  
  
  submitButton.addEventListener("click", showResults);
  userName.addEventListener("input", () => {
    heading.innerText = userName.value;
  });
  newGame.addEventListener("click", () => {
    window.location.reload();
  });
var readLineSync = require("readline-sync");

function start(){
    var userName = readLineSync.question("what is your name?");
    console.log("welcome " + userName + ',' + " IT'S TIME FOR CRICKET QUIZ");
    
    game(userName)
}

var score = 0;

var minScore = {
    name= 'Naiyya',
    score= 5,
};

var questions = [{
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
 
function play(question , options , answer){
    console.log(question);
    for(const key in options){
     console.log(`${key} : ${options[key]}`);
    } 

var userAnswer = readLineSync.question('choose your option: ');

if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("RIGHT!");
    score = score + 1;
}
else{
    console.log("WRONG!");
}
 console.log("+******************+");
 console.log("current score:" , score);
 console.log("+******************+");

}

function game(userName){
    for(var i=0; i<questions.length; i++){
        var cQuestion = questions[i];
        play(cQuestion.question , cQuestion.options , cQuestion.answer)
    }
    finalScore(userName);
}

    function finalScore(userName){
         console.log( "CONGRATULATIONS !! Your final score is :" , score);
     
        if(minScore <= score){
        minScore.name = userName;
        minScore.score = score;
        console.log("YEAAH! YOU HAVE WON.");
        console.log(minScore.name, ":" , minScore.score );
    }

    else{
        console.log("YOU HAVE LOST!");
    }
}

start();
const questions = [
    {
        question: "Which director directs the movie called ***** ****?",
        answers: [
            {text: "Chritopher Nolan", correct: false},
            {text: "David Fincher", correct: true},    
            {text: "Stanley Kubrick", correct: false}, 
            {text: "Vetrimaaran", correct: false}, 
        ]
    },
    {
        question: "For which movie Leonardo Dicaprio won the oscar?",
        answers: [
            {text: "The wolf of wall street", correct: false},
            {text: "The departed", correct: false},    
            {text: "Shutter Island", correct: false}, 
            {text: "The Revenant", correct: true},
        ]
    },
    {
        question: "What was the name of the character that played by Matthew McConaughey's in Interstellar?",
        answers: [
            {text: "Rick cooper", correct: false},
            {text: "Tom cooper", correct: false},    
            {text: "Joseph cooper", correct: true}, 
            {text: "Brad cooper", correct: false},
        ]
    },
    {
        question: "Which director won the academy award for his debut film?",
        answers: [
            {text: "Sam mendes", correct: true},
            {text: "Paul thomas anderson", correct: false},    
            {text: "David lynch", correct: false}, 
            {text: "Steven spielberg", correct: false},
        ]
    },
    {
        question: "Which series considered as greatest but ended with absolute shit!?",
        answers: [
            {text: "Cobra kai", correct: false},
            {text: "Game of thrones", correct: true},    
            {text: "The wire", correct: false}, 
            {text: "Lost", correct: false},
        ]
    },
    {
        question: "In 1993,Steven spielberg directed two films of both opposite genre:What was the genre of the films?",
        answers: [
            {text: "War-drama & Fantasy-adventure ", correct: false},
            {text: "Sci-fi-Adventure & Historical-drama", correct: true},    
            {text: "Sci-fi & Crime-thriller", correct: false}, 
            {text: "Adventure-drama & Rom-com", correct: false},
        ]
    },
    {
        question: "In which year,Marvel cinematic universe movies started?",
        answers: [
            {text: "2009 ", correct: false},
            {text: "2007", correct: false},    
            {text: "2008", correct: true}, 
            {text: "2010", correct: false},
        ]
    },
    {
        question: "Who starred as Batman in 1989 movie Batman?",
        answers: [
            {text: "Michael Keaton", correct: true},
            {text: "Jim Carrey", correct: false},    
            {text: "George Clooney", correct: false}, 
            {text: "Harrison Ford", correct: false},
        ]
    },
    {
        question: "What is the name of the first Star wars film  by release order?",
        answers: [
            {text: "Revenge of the sith", correct: false},
            {text: "A new hope", correct: true},    
            {text: "The phantom menace", correct: false}, 
            {text: "Attack of the clones", correct: false},
        ]
    },

    {
        question: "In Interstellar,how long did they spend on miller's planet?",
        answers: [
            {text: "22 years,6 months and 10 days", correct: false},
            {text: "23 years,4 months and 8 days", correct: true},    
            {text: "24 years,5 months and 9 days", correct: false}, 
            {text: "21 years,3 months and 6 days", correct: false},
        ]
    },
    {
        question: "The HBO series Game of thrones based on which book?",
        answers: [
            {text: "A song of ice and fire", correct: true},
            {text: "Fire and blood", correct: false},    
            {text: "A rhythm of blood", correct: false}, 
            {text: "Harry potter", correct: false},
        ]
    },
    {
        question: "For which movie Martin Scorcese won his best director award?",
        answers: [
            {text: "The killers of the flower moon", correct: false},
            {text: "Taxi driver", correct: false},    
            {text: "Goodfellas", correct: false}, 
            {text: "The departed", correct: true},
        ]
    },
    {
        question: "In Which franchise movie,Daniel redcliffe starred and became famous?",
        answers: [
            {text: "Lord of the rings", correct: false},
            {text: "Fantastic beasts", correct: false},    
            {text: "Harry potter", correct: true}, 
            {text: "Pirates of the caribbean", correct: false},
        ]
    },
    {
        question: "Who was the director of the  first movie of the Alien Franchise?",
        answers: [
            {text: "James Cameron", correct: false},
            {text: "Ridley Scott", correct: true},    
            {text: "Steven Spielberg", correct: false}, 
            {text: "David Fincher", correct: false},
        ]
    },
    {
        question: "What is the town name that takes place in the series Dark?",
        answers: [
            {text: "Winden", correct: true},
            {text: "Wismar", correct: false},    
            {text: "Munster", correct: false}, 
            {text: "Halzburg", correct: false},
        ]
    },
    {
        question: "In Stranger things,What's the character name that played by Winona ryder aka will byer's mom?",
        answers: [
            {text: "Janice byers", correct: false},
            {text: "Karen byers", correct: false},    
            {text: "Joyce byers", correct: true}, 
            {text: "Chrissy byers", correct: false},
        ]
    },
    {
        question: "Which movie portrays the realistic psychopath on the screen?",
        answers: [
            {text: "The Silence of the lambs", correct: false},
            {text: "No country for old men", correct: true},    
            {text: "A clockwork Orange", correct: false}, 
            {text: "The Shining", correct: false},
        ]
    },
    {
        question: "Which of the following movie is not a horror!(Think before you answer)?",
        answers: [
            {text: "La La Land", correct: false},
            {text: "500 Days of summer", correct: false},    
            {text: "Eternal sunshine of the spotless mind", correct: false}, 
            {text: "The Ring", correct: true},
        ]
    },
    {
        question: "In Game of thrones,'When you play game of thrones,you win or you die':who said this dialogue?",
        answers: [
            {text: "Lord Varys", correct: false},
            {text: "Tyrion Lannister", correct: false},    
            {text: "Cersei Lannister", correct: true}, 
            {text: "Tywin Lannister", correct: false},
        ]
    },
    {
        question: "What does Quentin Tarantino movies mainly focus on ?",
        answers: [
            {text: "Legs", correct: false},
            {text: "Feet", correct: true},    
            {text: "Lipsr", correct: false}, 
            {text: "Thighsr", correct: false},
        ]
    }
 
 

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
       answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment score if the answer is correct
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Show correct answer after selection
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Highlight correct answer
        }
        button.disabled = true; // Disable all buttons after selection
    });

    nextButton.style.display = "block"; // Show Next button
}


function showScore() {
    resetState();
   questionElement.innerHTML= `<h2>Your Score: ${score} / ${questions.length}</h2>`;
   nextButton.innerHTML = "Play again"; 
   nextButton.style.display = "block";                          
 }



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        document.getElementById("next-btn").style.display = "none";
     }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
    }
});

startQuiz();
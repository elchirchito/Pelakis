const preguntas = [
{
    question: "¿Cuantas sudamericanas tiene Boca Juniors?",
    answers: [
        { text: "4", correct: false},
        { text: "2", correct: true},
        { text: "3", correct: false},
        { text: "1", correct: false},
    ]
},
{
    question: "¿Cuantas asistencias tiene Riquelme en Boca Juniors?",
    answers: [
        { text: "114", correct: false},
        { text: "201", correct: false},
        { text: "123", correct: true},
        { text: "Ninguna es correcta", correct: false},
    ]
},    
{
    question: "¿En qué año Boca Juniors ganó su Primera División",
    answers: [
        { text: "1924", correct: false},
        { text: "1919", correct: true},
        { text: "1931", correct: false},
        { text: "1922", correct: false},
    ]
},    
{
    question: "¿En qué año Boca Juniors ganó su primera copa Libertadores?",
    answers: [
        { text: "1977", correct: true},
        { text:"2000", correct: false},
        { text: "1968", correct: false},
        { text: "Ninguna es correcta", correct: false} ,
    ]
} ,    
];

const questionElement = document.getElementById("pregunta"); 
const questionaButtons = document.getElementById("boton-respuesta");
const NetxButton = document.getElementById("Próximo-botón");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    siguienteButton.innerHTML = "Siguiente";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = preguntas[ currentQuestionIndex ];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.inerHTML = respuesta.text;
        button.classList.add("botón");
        answerButtons.appendChild(button);
    });
}

function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){

    answerButtons.removeChild(answerButtons.firstChild);
}
}

startQuiz()


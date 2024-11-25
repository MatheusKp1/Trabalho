const form = document.getElementById('start-form');
const quizContent = document.getElementById('quiz-content');
const restartButton = document.getElementById('restart');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

// Dados do quiz
const quizData = [
  {
    question: "Qual é a marca do carro mais vendido do mundo?",
    options: ["Toyota", "Ford", "Volkswagen", "Honda"],
    answer: "Toyota"
  },
  {
    question: "Em que ano foi lançado o primeiro carro elétrico moderno?",
    options: ["1996", "2000", "2008", "2012"],
    answer: "2008"
  }
];

let currentQuestion = 0;
let score = 0;

// Iniciar o quiz
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  quizContent.style.display = 'block';
  loadQuestion();
});

// Carregar pergunta
function loadQuestion() {
  const current = quizData[currentQuestion];
  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";
  current.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.className = "btn btn-option";
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

// Verificar resposta
function checkAnswer(selectedOption) {
  const current = quizData[currentQuestion];
  if (selectedOption === current.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// Finalizar o quiz
function endQuiz() {
  questionElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
  optionsElement.innerHTML = "";
  restartButton.style.display = 'block';
}

// Reiniciar
restartButton.addEventListener('click', () => {
  location.reload();
});
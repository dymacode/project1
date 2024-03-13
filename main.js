const quizData = [
  // Your quiz data
  {
    question: "JAVASCRIPT is an______Language?",
    a: "Object-Based",
    b: "Object-Oriented",
    c: "Procedural",
    d: "None of the Above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "None of the Above",
    correct: "b",
  },

  {
    question:
      "Which of the following keyword is used to define a variable in JAVASCRIPT?",
    a: "Var",
    b: "let",
    c: "Both A and B",
    d: "None of the Above",
    correct: "c",
  },
  {
    question: "What does HTML Stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "None of the Above",
    correct: "a",
  },

  {
    question: "What year was JAVASCRIPT launched?",
    a: "1996",
    b: "1999",
    c: "1994",
    d: "1995",
    correct: "d",
  },
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
 
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                        <button onClick="location.reload()">Reload</button>
       `;
    
    }
  }
});

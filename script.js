// DB Quiz
const dbQuiz = [
  {
    quest: " siapa presiden pertama indonesia",
    answer: ["SBY", "MEGAWATI", "SOEKARNO", "JOKOWI"],
  },
  {
    quest: " siapa oarang digambar uang lima ribu rupiah",
    answer: ["MH Thamrin", "Dr.k.h. Idham Kholid", "Frans Kaisiepo", "Tjut Meutia"],
  },
  {
    quest: "apa warna bendera indonesia",
    answer: ["merah putih", "merah putih biru", "putih merah", "putih merah biru"],
  },
];
let totalScore = 0;
const savedAnswer = [];
const ansewrArray = [2, 1, 0];
let quizStart = 0;
const label = document.querySelectorAll("label");
const labelArray = Array.from(label);

document.addEventListener("DOMContentLoaded", () => {
  setUpQuiz();
});

function nextQuest() {
  quizStart++;
  saves();
  if (quizStart > dbQuiz.length - 1) {
    stopQuiz();
  }
  resetState();
  setUpQuiz();
}

function setUpQuiz() {
  document.querySelector(".quest").textContent = dbQuiz[quizStart].quest;
  for (i = 0; i < labelArray.length; i++) {
    label[i].textContent = dbQuiz[quizStart].answer[i];
  }
}

const quizOpen = document.querySelector(".quiz-open");
const quizEnd = document.querySelector(".quiz-end");

const stopQuiz = () => {
  scorer();
  alert(`selesai`);
  elementSwitch();
  return;
};

const textQuizEnd = document.querySelector(".quiz-end p");
const elementSwitch = () => {
  textQuizEnd.textContent = `nilai kamu: ${totalScore}`;
  quizEnd.classList.add("block");
  quizOpen.classList.add("hide");
};

const saves = () => {
  const inputSaves = document.querySelector('input[name="choices"]:checked');
  if (inputSaves != null) {
    savedAnswer.push(parseInt(inputSaves.getAttribute("data-id")));
  } else {
    savedAnswer.push(0);
  }
  console.log(savedAnswer);
};

const resetState = () => {
  document.querySelector('input[name="choices"]:checked').checked = false;
};

const scorer = () => {
  for (i = 0; i < ansewrArray.length; i++) {
    if (ansewrArray[i] == savedAnswer[i]) totalScore += 100;
  }
};

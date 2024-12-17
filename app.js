// db questions

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

let mulaiQuiz = 0;
let totalScore = 0;
const jawaban = [2, 1, 0];
const tampungJawaban = [];

// Dom element
const soal = document.querySelector("#quest");
const labelInput = document.querySelectorAll("label");
const nextQuiz = document.querySelector(".next");
const quizMulai = document.querySelector(".quiz-open");
const quizSelesai = document.querySelector(".quiz-end");

document.addEventListener("DOMContentLoaded", () => {
  setUpQuiz();
});

const setUpQuiz = () => {
  soal.textContent = dbQuiz[mulaiQuiz].quest;
  for (let i = 0; i < labelInput.length; i++) {
    labelInput[i].textContent = dbQuiz[mulaiQuiz].answer[i];
  }
};

nextQuiz.addEventListener("click", () => {
  mulaiQuiz++;
  simpanJawaban();
  resetJawaban();
  if (mulaiQuiz > dbQuiz.length - 1) {
    stopQuiz();
  }
  setUpQuiz();
});

const stopQuiz = () => {
  score();
  // alert(`selesai:${totalScore}`);
  munculkanElement();
  return;
};

const simpanJawaban = () => {
  const jawabanUser = document.querySelector('input[name="choices"]:checked');
  if (jawabanUser != null) {
    tampungJawaban.push(parseInt(jawabanUser.getAttribute("data-id")));
  } else {
    tampungJawaban.push(null);
  }
};

const resetJawaban = () => {
  document.querySelector('input[name="choices"]:checked').checked = false;
};

const score = () => {
  for (let i = 0; i < jawaban.length; i++) {
    if (jawaban[i] == tampungJawaban[i]) totalScore += 100;
  }
};

const munculkanElement = () => {
  quizMulai.classList.add("hide");
  quizSelesai.classList.add("block");
  document.querySelector(".quiz-end p").textContent = `nilai kamu:${totalScore} `;
};

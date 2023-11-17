document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
  
    questions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
    });
  });
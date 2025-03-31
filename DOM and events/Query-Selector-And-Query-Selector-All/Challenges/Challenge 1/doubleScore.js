// Given a list of elements with a class of .score, double each score using .forEach() and .textContent.

const allScores = document.querySelectorAll(".score");

allScores.forEach(score => {
    score.textContent *= 2
})
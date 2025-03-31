// Select all .card elements and log their text content using forEach.

const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
    console.log(card.textContent);
})
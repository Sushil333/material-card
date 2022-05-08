const cards = document.querySelectorAll(".flip-card");

cards.forEach((card) =>
  card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
  })
);

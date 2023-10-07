console.log(document.title);

const genOneTitle = document.getElementById("gen-1");
genOneTitle.innerText = "Generasión 1 Pokimon";

const firstGenDiv = document.querySelector(".infocard-list");
firstGenDiv.style.background = "purple";

console.log(document.URL);
console.log(document.domain);

const images = document.querySelectorAll("img");
console.log(images);

// 6.
images.forEach(
  (image) =>
    (image.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
);

// 7

const cards = document.querySelectorAll(".infocard-lg-data.text-muted");

cards.forEach((card) => {
  if (card.querySelector(".itype.flying")) {
    card.style.background = "yellow";
  }
});

console.log(cards);

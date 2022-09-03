const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const box = document.querySelector(".boxes-container");

const textCard = [
  "WEEKLY 100% MATCH",
  "MONTHLY REWARDS",
  "MONTHLY MILLY",
  "TOP SLOTS",
  "TELL A FRIEND",
];

const fillCard = (textCard) => {
  textCard.forEach((card) => {
    templateCard.querySelector(".card-title").textContent = card;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  box.appendChild(fragment);
};

fillCard(textCard);

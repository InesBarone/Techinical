const templateTest = document.getElementById("template-testimonials").content;
const container = document.querySelector(".testimonials-container");

const testInfo = [
  [
    "I find the live casino games entertaining, and I like how Ignition has a lots of Crypto options.",
    "JHON. B",
  ],
  [
    "Ignition is a site I log onto so that I can relax, have some fun and, most importantly, win poker.",
    "CAMRON. A",
  ],
  [
    "Sites shouldn't make it hard for you to withdraw. Ignition isn't like that. It's so easy and quick to get your money out.",
    "EDD. C",
  ],
  [
    "One of the best parts of Ignition is its customer service. You can chat with someone in real time, and they are super helpful.",
    "PAULOS. S",
  ],
];

console.log(templateTest);

const fillTest = (testInfo) => {
  testInfo.forEach((info) => {
    templateTest.querySelector(".testimonials-text").textContent = info[0];
    templateTest.querySelector(".testimonials-end").textContent = info[1];

    const clone = templateTest.cloneNode(true);
    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
};

fillTest(testInfo);

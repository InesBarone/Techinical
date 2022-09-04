async function getInformation() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const json = await response.json();

  objectToArray(json);
}

getInformation();

const objectToArray = (data) => {
  const array = [];
  Object.values(data.bpi).forEach((coin) => {
    array.push(coin);
    console.log(array);
  });
  manageCards(array);
};

const manageCards = (array) => {
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");
  let i = 0;
  fillCards(array, i);

  leftButton.addEventListener("click", () => {
    if (i != 0) {
      i = i - 1;
    } else {
      i = array.length - 1;
    }
    fillCards(array, i);
  });

  rightButton.addEventListener("click", () => {
    if (i != array.length - 1) {
      i = i + 1;
    } else {
      i = 0;
    }
    fillCards(array, i);
  });
};

const fillCards = (array, i) => {
  const h1 = document.querySelector(".title");
  const description = document.querySelector(".description");
  const rate = document.querySelector(".rate");

  h1.textContent = array[i].code;
  description.textContent = array[i].description;
  rate.textContent = array[i].rate;
};

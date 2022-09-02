const templatePros = document.getElementById("template-pros").content;
const pros = document.querySelector(".pros-container");

const prosInfo = [
  ["/FE Test v2/assets/payouts.png", "FAST & EASY", "PAYOUTS"],
  ["/FE Test v2/assets/secure.png", "SAFE & SECURE", "DIGITAL ENVIRONMENT"],
  ["/FE Test v2/assets/trusted.png", "TRUSTED", "SINCE 2016"],
  [
    "/FE Test v2/assets/browser.png",
    "NO APP DOWNLOADS",
    "PLAY IN YOUR BROWSERS",
  ],
  ["/FE Test v2/assets/players.png", "10.000", "PLAYERS DAILY"],
];

const fillPros = (prosInfo) => {
  prosInfo.forEach((pro) => {
    templatePros.querySelector(".pros-img").setAttribute("src", pro[0]);
    templatePros.querySelector(".pros-text1").textContent = pro[1];
    templatePros.querySelector(".pros-text2").textContent = pro[2];

    const clone = templatePros.cloneNode(true);
    fragment.appendChild(clone);
  });
  pros.appendChild(fragment);
};

fillPros(prosInfo);

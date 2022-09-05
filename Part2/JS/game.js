const templateGame = document.getElementById("template-game").content;
const casinoGames = document.querySelector(".games-section");
const pokerGames = document.querySelector(".poker-games-container");
const cardsContainer = templateGame.querySelector(".template-games-container");

const gamesInfo = [
  [
    "TOP SLOTS",
    [
      ["./FE Test v2/assets/reels-and-wheels.jpeg", "REELS & WHEELS"],
      ["./FE Test v2/assets/mystic-wilds.jpeg", "MYSTIC WILDS"],
      ["./FE Test v2/assets/fast-and-sexy.jpeg", "FAST & SEXY"],
    ],
    "#6937E6",
    "0",
  ],
  [
    "LIVE CASINO",
    [
      ["./FE Test v2/assets/live-blackjack.jpeg", "LIVE BLACKJACK"],
      ["./FE Test v2/assets/live-roulette.jpeg", "LIVE ROULETTE"],
      ["./FE Test v2/assets/live-baccarat.jpeg", "LIVE BACCARAT"],
    ],
    "#EFFD5F",
    "1",
  ],
  [
    "MOST POPULAR GAMES",
    [
      ["./FE Test v2/assets/777-deluxe.jpeg", "777 DELUXE"],
      ["./FE Test v2/assets/golden-buffalo.jpeg", "GOLDEN BUFFALO"],
      ["./FE Test v2/assets/a-night-with-cleo.jpeg", "THE NEW BLACKJACK"],
    ],
    "#E0773E",
    "2",
  ],
  [
    "GAME TYPES",
    [
      ["./FE Test v2/assets/cash-games.jpeg", "CASH GAMES"],
      ["./FE Test v2/assets/zone-poker.jpeg", "ZONE POKER"],
      ["./FE Test v2/assets/jackpot-sit-and-go.jpeg", "JACKPOT SIT & GO"],
    ],
    "#C8302F",
    "3",
  ],
  [
    "FEATURED PROMOTIONS",
    [
      [
        "./FE Test v2/assets/crypto-depositors-freeroll.jpeg",
        "CRYPTO DEPOSITOR'S FREEROLL",
      ],
      ["./FE Test v2/assets/monthly-milly-tournaments.jpeg", "150K GTD SUNDAY"],
      [
        "./FE Test v2/assets/mad-mondays-tournaments.jpeg",
        "MAD MONDAY TOURNAMENTS",
      ],
    ],
    "#6FE3A6",
    "4",
  ],
  [
    "RECURRING TOURNAMENTS SERIES",
    [
      ["./FE Test v2/assets/crypto-poker-open.jpeg", "CRYPTO POKER OPEN"],
      [
        "./FE Test v2/assets/black-diamond-poker-open.jpeg",
        "11TH BLACK DIAMOND POKER",
      ],
      [
        "./FE Test v2/assets/super-millions-poker-open.jpeg",
        "SUPER MILLIONS POKER",
      ],
    ],
    "#0D49F5",
    "5",
  ],
];

const fillCardGames = (gamesInfo) => {
  gamesInfo.forEach((section, index) => {
    templateGame.querySelector(".section-games-title").textContent = section[0];

    templateGame.querySelector(".i1").setAttribute("src", section[1][0][0]);
    templateGame.querySelector(".t1").textContent = section[1][0][1];

    templateGame.querySelector(".i2").setAttribute("src", section[1][1][0]);
    templateGame.querySelector(".t2").textContent = section[1][1][1];

    templateGame.querySelector(".i3").setAttribute("src", section[1][2][0]);
    templateGame.querySelector(".t3").textContent = section[1][2][1];

    templateGame.querySelector(".c1").style.backgroundColor = section[2];
    templateGame.querySelector(".c2").style.backgroundColor = section[2];
    templateGame.querySelector(".c3").style.backgroundColor = section[2];

    templateGame.querySelector(".section-games-title").style.backgroundColor =
      section[2];

    templateGame.querySelector(
      ".view-more"
    ).style.border = `2px solid ${section[2]}`;

    if (section[2] == "#EFFD5F" || section[2] == "#6FE3A6") {
      templateGame.querySelector(".section-games-title").style.color = "black";
      templateGame.querySelector(".c1").style.color = "black";
      templateGame.querySelector(".c2").style.color = "black";
      templateGame.querySelector(".c3").style.color = "black";
    } else {
      templateGame.querySelector(".section-games-title").style.color = "white";
      templateGame.querySelector(".c1").style.color = "white";
      templateGame.querySelector(".c2").style.color = "white";
      templateGame.querySelector(".c3").style.color = "white";
    }

    const clone = templateGame.cloneNode(true);
    fragment.appendChild(clone);
    if (index <= 2) {
      casinoGames.appendChild(fragment);
    } else {
      pokerGames.appendChild(fragment);
    }
  });
};

fillCardGames(gamesInfo);

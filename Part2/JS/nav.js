const burguer = document.querySelector("#burguer");
const menu = document.querySelector("#nav-mobile div:nth-child(4)");

burguer.addEventListener("click", () => {
  burguer.classList.toggle("active");
  menu.classList.toggle("open");
});

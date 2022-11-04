// partie concernant les onglets
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".tab-btn");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    const part = document.getElementById(id);
    // console.log(part);
    part.classList.add("active");
  }
});
// partie concernants les influences
const musicians = [
  {
    id: 1,
    name: "yngwie malmsteen",
    img: (src = "./yngwie.png"),
  },
  {
    id: 2,
    name: "eddie van halen",
    img: (src = "./eddie.png"),
  },
  {
    id: 3,
    name: "randy rhoads",
    img: (src = "./randy.png"),
  },
];

const img = document.querySelector("#person-img");
const buttons = document.querySelectorAll(".icon");
const name = document.querySelector(".zikos");
let pos = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("next-btn")) {
      pos++;

      if (pos > musicians.length - 1) {
        pos = 0;
      }
    } else if (e.currentTarget.classList.contains("prev-btn")) {
      pos--;

      if (pos < 0) {
        pos = musicians.length - 1;
      }
    }

    name.textContent = musicians[pos].name;
    img.src = musicians[pos].img;
  });
});

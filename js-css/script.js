//inizio carosello

// VARIABILI
let caroselliCompleti = document.querySelectorAll(".carousel.slide");
let caroselloContenitore = document.querySelectorAll(".carousel-inner");

//CICLI

for (const iterator of caroselloContenitore) {
  iterator.style.right = "0%";
}
// FUNZIONI

function bottDestra(e) {
  if (
    !(
      e.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.lastElementChild.getBoundingClientRect()
        .x >= 0 &&
      e.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.lastElementChild.getBoundingClientRect()
        .x < window.innerWidth
    )
  ) {
    e.previousElementSibling.previousElementSibling.style.right = `${
      parseInt(e.previousElementSibling.previousElementSibling.style.right) + 99
    }%`;
  }
  if (e.previousElementSibling.style.right != "0%") {
    e.previousElementSibling.classList.add("visual");
  }
}

function bottSinistra(e) {
  if (e.previousElementSibling.style.right != "0%") {
    if (e.previousElementSibling.style.right == "99%") {
      e.classList.remove("visual");
    }
    e.previousElementSibling.style.right = `${
      parseInt(e.previousElementSibling.style.right) - 99
    }%`;
  }
}
//fine carosello

//wrap o no-wrap

let bottoniVisual = document.querySelectorAll("#box2 button");

bottoniVisual[0].addEventListener("click", function () {
  let container = document.querySelectorAll(".row.gx-1");
  for (const iterator of container) {
    iterator.classList.remove("wrap");
  }
});

bottoniVisual[1].addEventListener("click", function () {
  let container = document.querySelectorAll(".row.gx-1");
  for (const iterator of container) {
    iterator.classList.add("wrap");
  }
});
// fine wrap o no-wrap
//inizio infinite scroll

window.addEventListener("scroll", function () {
  if (
    window.scrollY + this.window.innerHeight >=
    document.body.offsetHeight - document.querySelector("footer").offsetHeight
  ) {
    let divProva = document.createElement("div");
    divProva.classList.add("carousel");
    divProva.classList.add("slide");
    divProva.innerHTML = `${
      caroselliCompleti[
        Math.floor(Math.random() * (caroselliCompleti.length - 1))
      ].innerHTML
    }`;
    document.getElementById("caroselli").appendChild(divProva);
  }
});
//fine infinite scroll

// inizio funzione di scroll per rendere visibile i caroselli

caroselliCompleti.forEach((element) => {
  if (
    element.getBoundingClientRect().y >= 0 &&
    element.getBoundingClientRect().y < window.innerHeight
  ) {
    element.classList.add("opaci");
  }
});

window.addEventListener("scroll", function () {
  caroselliCompleti = document.querySelectorAll(".carousel.slide");
  caroselliCompleti.forEach((element) => {
    if (
      element.getBoundingClientRect().y >= 0 &&
      element.getBoundingClientRect().y < window.innerHeight
    ) {
      element.classList.add("opaci");
    } else {
      element.classList.remove("opaci");
    }
  });
});

// fine funzione di scroll

// inizio funzione di selezione generi

document.getElementById("genere").addEventListener("click", function () {
  switch (document.getElementById("genere").value) {
    case "genres":
      caroselliCompleti.forEach((element) => {
        if (
          element.getBoundingClientRect().y >= 0 &&
          element.getBoundingClientRect().y < window.innerHeight
        ) {
          element.classList.add("opaci");
        } else {
          element.classList.remove("opaci");
        }
        element.classList.remove("no_visual");
        element.classList.add("visual");
      });

      break;

    default:
      document.querySelectorAll(".carousel.slide h3").forEach((element) => {
        if (
          element.innerText
            .toLowerCase()
            .includes(document.getElementById("genere").value)
        ) {
          element.parentElement.classList.remove("no_visual");
          element.parentElement.classList.add("visual");
          if (
            element.parentElement.getBoundingClientRect().y >= 0 &&
            element.parentElement.getBoundingClientRect().y < window.innerHeight
          ) {
            element.parentElement.classList.add("opaci");
          } else {
            element.parentElement.classList.remove("opaci");
          }
        } else {
          element.parentElement.classList.remove("visual");
          element.parentElement.classList.add("no_visual");
        }
      });
      break;
  }
  console.log(document.getElementById("genere").value);
});

// fine funzione selezione generi

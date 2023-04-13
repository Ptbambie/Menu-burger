console.log("connecté");

// je sélectionne et je stock

// je selectionne l'icone burger
const icone = document.querySelector(".navbar-mobile i");
console.log(icone, "clic");

// je selectionne mon menu version mobile
const modal = document.querySelector(".modal");
console.log(modal);

//je soumet un "click" à l'icône
icone.addEventListener('click',() => {
    // console.log(icone,"cliqué");
    modal.classList.toggle("change-modal")
    icone.classList.toggle("fa-times")
});
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");  // Modification ici
const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Création des points (dots)
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dots.appendChild(dot);
});

// Mise à jour du slide
function updateSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerTxt.innerHTML = slides[currentSlide].tagLine;

  // Mise à jour des points
  document.querySelectorAll(".dot").forEach((dot, index) => {
	dot.classList.toggle("dot_selected", index === currentSlide);
  });
}

// Événement click sur la flèche gauche
arrowLeft.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

// Événement click sur la flèche droite
arrowRight.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

// Initialisation du premier slide
updateSlide();
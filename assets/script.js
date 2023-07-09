const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// appel balises HTML

const boutonG = document.getElementById("fleche_gauche");

let boutonD = document.getElementById("fleche_droite");

const imageItem = document.querySelector('.banner-img');

const tagLine = document.querySelector("p");

const dots = document.querySelector('.dots');

const dotElements = document.getElementsByClassName("dot");

let indexSlides = 0;

const baseUrlImage = "assets/images/slideshow/";

//changements du paragraphe et de l'image

//lestener flèche gauche et droite

function main() {
	createDots();
	clickPrevSlide();
	clickNextSlide();
}

main();

function clickPrevSlide() {
	boutonG.addEventListener("click", function () {
		if (indexSlides <= 0) {
			indexSlides = slides.length - 1;
		} else {
			indexSlides = indexSlides - 1;
			// Sinon la variable count est decrementée de 1
		}
		//groupe();
		setActiveDot();
		updateContentSlide();
		console.log("clique gauche")
	});
}

function clickNextSlide() {
	boutonD.addEventListener("click", function () {
		indexSlides++;
		if (indexSlides >= slides.length) {

			indexSlides = 0;
		}
		setActiveDot();
		updateContentSlide();
	});
}

function updateContentSlide() {
	imageItem.src = baseUrlImage + slides[indexSlides].image;
	tagLine.innerHTML = slides[indexSlides].tagLine;
}

function createDots() {
	//class dot
	for (let i = 0; i < slides.length; i++) {

		//boucle pour indiquer le nombre de boule à placer, tant que i est inférieur à la taille du tableau, on ajoute +1 à i

		let div = document.createElement("div");

		//on cree un element html nommer "div" qu'on ajoute dans une variable pour le reutiliser.

		div.classList.add("dot");

		//on ajoute a notre "div" la classe css (dot)

		dots.appendChild(div);

		// on attache notre "div" a l'element parrent (dots)

		if (i == indexSlides) div.classList.add("dot_selected");

		//Si i =count (0) alors le premier points recuperer dot_selected
	}
}

function setActiveDot() {
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	dotElements[indexSlides].classList.add("dot_selected");
}

//regroupements fonctions
/*function groupe(){
	dot();
	suivant();
}*/
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let BouttonX = document.getElementById("close_Boutton");

/* Initial state of the navigation */
let isNavOpen = false;

openBtn.addEventListener("click", (event) => {
  if (!isNavOpen) {
    sidenav.classList.add("active");
    openBtn.classList.add("hide");
    BouttonX.classList.add("visible");
    isNavOpen = true;
    console.log('open');
    // Empêcher la propagation de l'événement de clic
    event.stopPropagation();
  }
});

BouttonX.addEventListener("click", (event) => {
  if (isNavOpen) {
    sidenav.classList.remove("active");
    openBtn.classList.remove("hide");
    BouttonX.classList.remove("visible");
    isNavOpen = false;
    console.log('close');
  }
});

window.addEventListener("click", (event) => {
  if (isNavOpen && event.target !== sidenav && event.target !== openBtn) {
    console.log('ok');
    sidenav.classList.remove("active");
    openBtn.classList.remove("hide");
    BouttonX.classList.remove("visible");
    isNavOpen = false;
  }
});


let images=[
	"img/Protection-chantier.jpg",
	"img/Batiment.jpg",
	"img/immobillier.jpg",
	// "img/materiel-chantier.jpg",
	"img/shutterstock_580685032-compressor.jpg",
	
	


] 
let phrase=[
	"Construction de batiment",
	"Gestion immobilliere",
	"Commerce generale",
];
let paragraphe_defil=document.getElementById("defil_phrase");

// paragraphe_defil=getElementById("defil_phrase");
let banner_slide_show=document.getElementById("slideshow");
currentIndex=0;

	
setInterval(function() {
	banner_slide_show.classList.add('clear');
	paragraphe_defil.classList.add('clear');
	currentIndex = (currentIndex + 1) % images.length;
	banner_slide_show.style.backgroundImage = 'url(' + images[currentIndex] + ')';
	if(currentIndex >= phrase.length){//Pas compris pourquoi ca marche avec >=
		paragraphe_defil.innerText=" ";
	}else{
	paragraphe_defil.innerText=phrase[currentIndex];
	paragraphe_defil.classList.remove('clear');
	}
	banner_slide_show.classList.remove('clear');
	
	
  } ,5000);	

  //Page de Realisation
let link_batiment=document.getElementById("link_batiment");
let link_routes=document.getElementById("link_routes");
let link_immobillier=document.getElementById("link_immobillier");
let link_ouvrage=document.getElementById("link_ouvrage");

let batiment=document.getElementById("section_batiment");
let routes=document.getElementById("section_routes");
let immobillier=document.getElementById("section_immobillier");
let ouvrage=document.getElementById("section_ouvrage");

link_batiment.onclick=affiche_batiment;
link_routes.onclick=affiche_routes;
link_immobillier.onclick=affiche_immobillier;
link_ouvrage.onclick=affiche_ouvrage;


function affiche_batiment(){
  batiment.classList.remove('hide');
  routes.classList.add('hide');
  immobillier.classList.add('hide');
  ouvrage.classList.add('hide');
  }
function affiche_routes(){
  routes.classList.remove('hide');
  batiment.classList.add('hide');
  immobillier.classList.add('hide');
  ouvrage.classList.add('hide');
}
function affiche_immobillier(){
  immobillier.classList.remove('hide');
  batiment.classList.add('hide');
  routes.classList.add('hide');
  ouvrage.classList.add('hide');
}
function affiche_ouvrage(){
  ouvrage.classList.remove('hide');
  batiment.classList.add('hide');
  routes.classList.add('hide');
  immobillier.classList.add('hide');
}

let commentaire=document.getElementsByClassName("client_comments");


  


			
			// <button id="prev-button">Précédent</button>
			// <button id="next-button">Suivant</button>
			// Ajoutez des écouteurs d'événements à ces boutons pour appeler des fonctions lorsque l'utilisateur clique dessus.
			
			// var prevButton = document.getElementById('prev-button');
			// var nextButton = document.getElementById('next-button');
			
			// prevButton.addEventListener('click', previousImage);
			// nextButton.addEventListener('click', nextImage);
			// Créez deux fonctions en JavaScript, une pour afficher l'image précédente et une pour afficher l'image suivante. Ces fonctions doivent maintenir un index pour suivre l'image actuelle.
			// javascript
			
			
			// function previousImage() {
			//   currentIndex--;
			//   if (currentIndex < 0) {
			// 	currentIndex = images.length - 1;
			//   }
			//   displayImage();
			// }
			
			// function nextImage() {
			//   currentIndex++;
			//   if (currentIndex >= images.length) {
			// 	currentIndex = 0;
			//   }
			//   displayImage();
			// }
			
			// function displayImage() { 
			// banner_slide_show.style.backgroundImage = 'url(' + images[currentIndex] + ')';
			// }
			

			
			// function changerImage() {
			// 	images[currentIndex].style.display = "none";
			// 	currentIndex = (currentIndex + 1) % images.length;
			// 	images[currentIndex].style.display = "block";
			//   }
			  
			 


			//   setInterval(
			// 	function(){
			// 		images[current_index].style.opacity = 0;
			// 		current_index=(current_index +1) % images.length;
			// 		images[current_index].style.opacity = 1;}
			// 	,5000);
		
			console.log(images[0]);
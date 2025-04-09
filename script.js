let imagesAll = [
  "./img/reptile_snake_1280.jpg",
  "./img/bird_parrot_1280.jpg",
  "./img/amphibian_frog_1280.jpg",
  "./img/mammal_elephant_1280.jpg",
  "./img/amphibian_salamander_1280.jpg",
  "./img/reptile_lizard_1280.jpg",
  "./img/amphibian_toad_1280.jpg",
  "./img/bird_eagle_1280.jpg",
  "./img/mammal_cat_1280.jpg",
  "./img/bird_owl_1280.jpg",
  "./img/mammal_lion_1280.jpg",
  "./img/bird_pinguin_1280.jpg",
  "./img/mammal_dolphin_1280.jpg",
  "./img/reptile_crocodile_1280.jpg", 
  "./img/amphibian_axolotl_1280.jpg",
  "./img/reptile_tortoise_1280.jpg"
];

let imagesMammals = [
  "./img/mammal_elephant_1280.jpg",
  "./img/mammal_cat_1280.jpg",
  "./img/mammal_lion_1280.jpg",
  "./img/mammal_dolphin_1280.jpg",
];

let imagesBirds = [
  "./img/bird_parrot_1280.jpg",
  "./img/bird_eagle_1280.jpg",
  "./img/bird_owl_1280.jpg",
  "./img/bird_pinguin_1280.jpg",
];

let imagesReptiles = [
  "./img/reptile_snake_1280.jpg",
  "./img/reptile_lizard_1280.jpg",
  "./img/reptile_crocodile_1280.jpg", 
  "./img/reptile_tortoise_1280.jpg"
];

let imagesAmphibians = [
  "./img/amphibian_frog_1280.jpg",
  "./img/amphibian_salamander_1280.jpg",
  "./img/amphibian_toad_1280.jpg",
  "./img/amphibian_axolotl_1280.jpg",
];



let currentImages = [];
// let currentDescriptions = [];

function renderFiltered(event, index) {

  // Setze alle Buttons zurück und aktiviere den aktuellen
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";

  if(index == 'show-all') {
    currentImages = imagesAll;
  }
  else if(index == 'mammals') {
    currentImages = imagesMammals;
  }
  else if(index == 'birds') {
    currentImages = imagesBirds;
  }
  else if(index == 'reptiles') {
    currentImages = imagesReptiles;
  }
  else if(index == 'amphibians') {
    currentImages = imagesAmphibians;
  }
  renderImages();
}

function renderImages() {
  let imageTabContent = document.getElementById('tabcontent');
  imageTabContent.innerHTML = "";

    // Aktiviere die Anzeige des Content-Bereichs
    imageTabContent.style.display = "flex";
    imageTabContent.classList.add("active");

  for (let imageIndex = 0; imageIndex < currentImages.length; imageIndex++) {
    imageTabContent.innerHTML += createImageTemplate(imageIndex);
  }
}

function createImageTemplate(imageIndex) {
  return  `<img onclick="openOverlay(${imageIndex})" src="${currentImages[imageIndex]}">`;
}

function toggleOverlay() {
  let overlayRef = document.getElementById('overlay')

  overlayRef.classList.toggle('d-none')
}

function openOverlay(imageIndex) {
  // Hole das Overlay-Element
  let overlayRef = document.getElementById('overlay');
  
  // Füge das große Bild zum Overlay hinzu, indem die neue Funktion aufgerufen wird
  overlayRef.innerHTML = getOverlayTemplate(imageIndex);
  
  // Zeige das Overlay an
  overlayRef.classList.remove('d-none');
}

function getOverlayTemplate(imageIndex) {
  return `
    <div class="overlay-content">
      <img class="overlay-image" src="${currentImages[imageIndex]}">
    </div>
  `;
}







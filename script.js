let images = [
    "./img/amphibian_axolotl_1280.jpg",
    "./img/amphibian_frog_1280.jpg",
    "./img/amphibian_salamander_1280.jpg",
    "./img/amphibian_toad_1280.jpg",
    "./img/bird_eagle_1280.jpg",
    "./img/bird_owl_1280.jpg",
    "./img/bird_parrot_1280.jpg",
    "./img/bird_pinguin_1280.jpg",
    "./img/mammal_cat_1280.jpg",
    "./img/mammal_dolphin_1280.jpg",
    "./img/mammal_elephant_1280.jpg",
    "./img/mammal_lion_1280.jpg",
    "./img/reptile_crocodile_1280.jpg",
    "./img/reptile_lizard_1280.jpg",
    "./img/reptile_snake_1280.jpg",
    "./img/reptile_tortoise_1280.jpg"
];

// Get the element with id="defaultOpen" and click on it
document.getElementById("default-open").click();

function openAnimals(event, animalName) {  
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(animalName).style.display = "flex";
    document.getElementById(animalName).classList.add("active");
    event.currentTarget.className += " active";
}

function renderImages() {
  let imageContainer = document.getElementById("show-all");
  imageContainer.innerHTML = "";
  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
      imageContainer.innerHTML += `<img onclick="openImage(${imageIndex})" src="${images[imageIndex]}">`;
  }
}

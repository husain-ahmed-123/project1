/*------------------------ Cached Element References ------------------------*/
const buttonEle = document.querySelector("#start-game");
const resetEle = document.querySelector("#restart");
const lettersEle = document.querySelector("#letters");
const categoryEle = document.querySelector("#category-menu");
const wordDisplayEle = document.querySelector("#word-display");
console.log(buttonEle);
console.log(resetEle);
console.log(lettersEle);
console.log(categoryEle);
console.log(wordDisplayEle);

/*-------------------------------- Constants --------------------------------*/

const categories = {
  fruits: [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "watermelon",
    "kiwi",
    "pineapple",
    "mango",
    "peach",
  ],

  jobs: [
    "doctor",
    "engineer",
    "teacher",
    "nurse",
    "lawyer",
    "artist",
    "chef",
    "pilot",
    "writer",
    "musician",
  ],

  animals: [
    "dog",
    "cat",
    "elephant",
    "giraffe",
    "lion",
    "tiger",
    "bear",
    "monkey",
    "zebra",
    "kangaroo",
  ],

  countries: [
    "USA",
    "Canada",
    "Mexico",
    "Brazil",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "China",
    "Australia",
  ],

  colors: [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
  ],

  sports: [
    "soccer",
    "basketball",
    "tennis",
    "baseball",
    "golf",
    "swimming",
    "cycling",
    "running",
    "skiing",
    "surfing",
  ],

  carBrands: [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
  ],

  musicGenres: [
    "pop",
    "rock",
    "hip-hop",
    "jazz",
    "classical",
    "country",
    "reggae",
    "blues",
    "electronic",
    "folk",
  ],

  movieGenres: [
    "action",
    "comedy",
    "drama",
    "horror",
    "romance",
    "sci-fi",
    "thriller",
    "animation",
    "documentary",
    "fantasy",
  ],

  shapes: [
    "circle",
    "square",
    "triangle",
    "rectangle",
    "pentagon",
    "hexagon",
    "octagon",
    "star",
    "heart",
    "diamond",
  ],

  planets: [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ],

  seasons: ["spring", "summer", "fall", "winter"],

  elements: ["fire", "water", "earth", "air", "metal", "wood"],
};

/*-------------------------------- Variables --------------------------------*/
let secretWord = "";
//let selectCategory = "";
let guessCount = [];
let maxmistakes = 8;
let mistakes = 0;
let underscore = [];
let wordList = [];
/*-------------------------------- Functions --------------------------------*/
function selectCategory(event) {
  selectCategory = event.target.dataset.category;
  console.log(selectCategory);
}
function selectLetter(event) {
  const letter = event.target.textContent.toLowerCase();
  console.log(letter);
}
function restart() {
  secretWord = "";
  guessCount = [];
  mistakes = 0;
  underscore = [];
  wordDisplayEle.textContent = "";
  console.log("Game restarted");
}

function startGame() {
  const wordList = categories[selectCategory];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  secretWord = wordList[randomIndex].toLowerCase();
  console.log(secretWord);
  for (let i = 0; i < secretWord.length; i++) {
    underscore.push("_");
  }
  wordDisplayEle.textContent = underscore.join(" ");
  console.log("category:", selectCategory);
  console.log("secretWord:", secretWord);
}

/*----------------------------- Event Listeners -----------------------------*/
buttonEle.addEventListener("click", startGame);
resetEle.addEventListener("click", restart);
lettersEle.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    selectLetter(event);
  }
});

categoryEle.addEventListener("click", selectCategory);

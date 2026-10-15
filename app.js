/*------------------------ Cached Element References ------------------------*/
const buttonEle = document.querySelector("#start-game");
const resetEle = document.querySelector("#restart");
const lettersEle = document.querySelectorAll("#letters");
console.log(buttonEle);
console.log(resetEle);
console.log(lettersEle);

/*-------------------------------- Constants --------------------------------*/
const fruits = [
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
];
const jobs = [
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
];
const animals = [
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
];
const countries = [
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
];
const colors = [
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
];
const sports = [
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
];
const carBrands = [
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
];
const musicGenres = [
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
];
const movieGenres = [
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
];
const shapes = [
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
];
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];
const seasons = ["spring", "summer", "fall", "winter"];
const elements = ["fire", "water", "earth", "air", "metal", "wood"];

/*-------------------------------- Variables --------------------------------*/
let secretWord = "";
let guessCount = [];
let maxmistakes = 8;
let mistakes = 0;
/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttonEle.addEventListener("click", startGame);
resetEle.addEventListener("click", resetGame);
lettersEle.forEach((letter) => {
  letter.addEventListener("click", handleGuess);
});

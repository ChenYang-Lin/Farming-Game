// Selectors
// containers
const gameContainer = document.querySelector(".game-container");
const farmContainer = document.querySelector(".farm-container");
const uiContainer = document.querySelector(".ui-container");

// Selectors for message box
const messageContainer = document.querySelector(".message-container");
const messageHeader = document.querySelector(".message-header");
const messageBody = document.querySelector(".message-body");
const messageBtn = document.querySelector(".message-btn");

// Selectors for gold exp
const currLevel = document.querySelector(".exp-curr");
const expText = document.querySelector(".exp-text");
const expGreen = document.querySelector(".exp-green");
const expGreenWidth = expGreen.clientWidth;
const expBlack = document.querySelector(".exp-black");
const goldText = document.querySelector(".gold-text");

// Selectors for general stuff
const cover = document.querySelector(".cover");
const cover2 = document.querySelector(".cover2");
const cover3 = document.querySelector(".cover3");
const timeProgressBar = document.querySelector(".time-bot");

// Event Listeners
farmContainer.addEventListener("click", (e) => updateFarmSquare(e));
uiContainer.addEventListener("click", (e) => updateCursor(e));

messageBtn.addEventListener("click", (e) => {
  e.target.parentNode.style.display = "none";
  cover3.style.display = "none";
});

// LocalStorage keys and application data
const LOCAL_STORAGE_FARM_STAT = "LOCAL_STORAGE_FARM_STAT";
const LOCAL_STORAGE_FARM_USER_DATA = "LOCAL_STORAGE_FARM_USER_DATA";
const LOCAL_STORAGE_FARM_SEED_INVENTORY = "LOCAL_STORAGE_FARM_SEED_INVENTORY";
const LOCAL_STORAGE_FARM_STORE = "LOCAL_STORAGE_FARM_STORE";
const LOCAL_STORAGE_FARM_BAG = "LOCAL_STORAGE_FARM_BAG";

let InfoFarmSquares = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_STAT)) || [];
let InfoUserData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_USER_DATA));
let InfoSeedInventory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_SEED_INVENTORY)) || [];
let InfoStore = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_STORE)) || [];
let InfoBag = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_BAG)) || [];

// Image URLS and color
// const potato1URL = "./images/potato/potato1.png";

const wateredLand = "rgb(92, 31, 16)";
const unWateredLand = "rgb(87, 69, 64)";
const harvestedLand = "rgb(43, 35, 33)";
const unHarvestedLand = "rgb(87, 69, 64)";

const STAT = {
  EMPTY: "empty",
  GROWING: "growing",
  READY: "ready",
  HARVESTED: "harvested",
};

let numFarmSquare = 20;
let currInstruction = "";
let index = 0;

function alertWindow(text) {
  messageContainer.style.display = "block";
  cover3.style.display = "block";
  messageBody.innerHTML = text;
}

load();

let fps = 30;
const interval = setInterval(() => {
  updateGame();
}, 1000 / fps);

// prevent scroll
document.ontouchmove = function (event) {
  event.preventDefault();
};

// Selectors
const invenBox = document.querySelector(".plant-seeds-container");
const openInvenBtn = document.querySelector(".select-seeds");
const seedsContainer = document.querySelector(".seeds-container");
const invenCancelBtn = document.querySelector(".cancel-btn");
const invenSelectBtn = document.querySelector(".select-btn");

const currSeedInfo = document.querySelector(".curr-seed-amount");

let selectedSeedID = 0;
let indexOfSelected = null;

// Listeners
invenCancelBtn.addEventListener("click", () => {
  closeInventory();
});
openInvenBtn.addEventListener("click", () => {
  invenBox.style.display = "block";
  cover.style.display = "block";
  showSeeds();
});

seedsContainer.addEventListener("click", (e) => selectNewSeed(e));

invenSelectBtn.addEventListener("click", () => changeSeed());

// Functions
function showSeeds() {
  seedsContainer.innerHTML = "";
  console.log(InfoSeedInventory);
  InfoSeedInventory.forEach((e) => {
    let seedName = plantsName[e.seedID].name;
    let seedAmt = e.seedAmount;
    let container = `
        <div class="seed-element-container">
            <div class="element-image" style="background-image: url(${chooseSeeds()}"></div>
            <div class="element-info">
                <div class="element-name">${seedName} Seeds: </div>
                <div class="element-amount">X${seedAmt}</div>
            </div>
        </div>
      `;
    function chooseSeeds() {
      if (seedName == "Potato") return spriteImages[0][5];
      if (seedName == "Carrot") return spriteImages[1][5];
      if (seedName == "Grape") return spriteImages[2][5];
    }
    seedsContainer.innerHTML += container;
  });
}

function selectNewSeed(e) {
  indexOfSelected = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);

  // Exit if selected anything other than seed element
  if (!e.target.classList.contains("seed-element-container")) return;

  // clear all selected items
  //   console.log(e.target.parentNode.children.length);
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].style.border = "2px solid black";
  }

  e.target.style.border = "5px solid red";
  console.log(indexOfSelected);
}

function changeSeed() {
  if (indexOfSelected === null || indexOfSelected === "") {
    alertWindow("Please select a seed!");
    return;
  }

  selectedSeedID = indexOfSelected;
  closeInventory();
  renderSeedDisplay();
}

function closeInventory() {
  invenBox.style.display = "none";
  cover.style.display = "none";
}

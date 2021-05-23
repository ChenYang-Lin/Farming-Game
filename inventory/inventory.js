// Selectors
const invenBox = document.querySelector(".plant-seeds-container");
const openInvenBtn = document.querySelector(".select-seeds");
const seedsContainer = document.querySelector(".seeds-container");
const invenCancelBtn = document.querySelector(".inven-cancel-btn");
const invenSelectBtn = document.querySelector(".inven-select-btn");

const currSeedInfo = document.querySelector(".curr-seed-amount");

let selectedSeedID = 0;
let indexOfSelected = null;

// Listeners
invenCancelBtn.addEventListener("click", () => {
  closeInventory();
});
openInvenBtn.addEventListener("click", () => {
  clearSelected();
  invenBox.style.display = "block";
  cover.style.display = "block";
  showSeeds();
});

seedsContainer.addEventListener("click", (e) => selectNewSeed(e));

invenSelectBtn.addEventListener("click", () => changeSeed());

// Functions
function showSeeds() {
  seedsContainer.innerHTML = "";
  //   console.log(InfoSeedInventory);
  InfoSeedInventory.forEach((e) => {
    let seedName = plantsName[e.seedID].name;
    let seedAmt = e.seedAmount;
    let container = `
        <div class="seed-element-container general-element-container">
            <div class="element-image" style="background-image: url(${chooseSeeds()}"></div>
            <div class="element-info">
                <div class="element-name">${seedName} Seeds: </div>
                <div class="element-amount">X${seedAmt}</div>
            </div>
        </div>
      `;
    function chooseSeeds() {
      let e = storeData.find((e) => seedName === e.name);
      return spriteImages[e.plantID][5];
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
  //   console.log(indexOfSelected);
}

function changeSeed() {
  if (indexOfSelected === null || indexOfSelected === "") {
    alertWindow("Please select a seed!");
    return;
  }

  selectedSeedID = indexOfSelected;
  indexOfSelected = null;
  closeInventory();
  renderSeedDisplay();
}

function closeInventory() {
  invenBox.style.display = "none";
  cover.style.display = "none";
  indexOfSelected = null;
}

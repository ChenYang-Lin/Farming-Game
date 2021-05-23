// Selectors
const storeBox = document.querySelector(".store-container");
const openStoreBtn = document.querySelector(".shop");
const merchandiseContainer = document.querySelector(".merchandise-container");
const storeCancelBtn = document.querySelector(".store-cancel-btn");
const storeSelectBtn = document.querySelector(".store-select-btn");

let selectedPlantID = 0;
let indexSelected = null;
let unitPrice = 0;

// Listeners
storeCancelBtn.addEventListener("click", () => closeStore());

openStoreBtn.addEventListener("click", () => {
  clearSelected();
  storeBox.style.display = "block";
  cover.style.display = "block";
  showMerchandise();
});

merchandiseContainer.addEventListener("click", (e) => selectNewPlant(e));

storeSelectBtn.addEventListener("click", () => confirmPlant());

// Functioins
function showMerchandise() {
  merchandiseContainer.innerHTML = "";

  InfoStore.forEach((e) => {
    let plantName = e.name;
    let plantPrice = e.price;
    let container;
    let containerUnlocked = `
      <div class="merchandise-element-container general-element-container">
            <div class="element-image" style="background-image: url(${choosePlant()}"></div>
            <div class="element-info">
                <div class="element-name">${plantName} Seeds: </div>
                <div class="element-price" style="font-weight: 900">$${plantPrice}</div>
            </div>
        </div>
      `;
    let containerLocked = `
      <div class="merchandise-element-container general-element-container locked">
            <div class="element-image" style="background-image: url(${choosePlant()}"></div>
            <div class="element-info">
                <div class="element-name">${plantName} Seeds: </div>
                <div class="element-price" style="font-weight: 900">$${plantPrice}</div>
                <div class="locked-message">Unlock lv.${e.unlock}</div>
            </div>
        </div>
      `;
    // check if unlocked
    let itemUnlockLevel = e.unlock;
    let userCurrLevel = InfoUserData.currLevel;
    if (userCurrLevel < itemUnlockLevel) {
      container = containerLocked;
    } else {
      container = containerUnlocked;
    }

    function choosePlant() {
      let e = storeData.find((e) => plantName === e.name);
      return spriteImages[e.plantID][5];
    }
    merchandiseContainer.innerHTML += container;
  });
}

function selectNewPlant(e) {
  //   console.log(e.target);
  indexSelected = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
  //   console.log(indexSelected);

  // Exit if selected anything other than plant element
  if (!e.target.classList.contains("merchandise-element-container")) return;

  // clear all selected items
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].style.border = "2px solid black";
  }

  //   console.log(e.target);
  e.target.style.border = "5px solid red";

  // fine the unit price of current plant
  unitPrice = storeData[indexSelected].price;
}

function confirmPlant() {
  if (indexSelected === null || indexSelected === "") {
    alertWindow("Please select a plant!");
    return;
  }
  //   console.log(merchandiseContainer.parentNode.children[indexSelected]);
  merchandiseContainer.parentNode.children[0].children[indexSelected].style.border =
    "2px solid black";

  selectedPlantID = indexSelected;

  openChooseAmountWindow("buy");
  indexSelected = null;
}

function closeStore() {
  //
  storeBox.style.display = "none";
  cover.style.display = "none";
  indexSelected = null;
}

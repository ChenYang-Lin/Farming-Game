const bagBox = document.querySelector(".bag-container");
const openBagBtn = document.querySelector(".inventory");
const vegeContainer = document.querySelector(".vege-container");
const bagCancelBtn = document.querySelector(".bag-cancel-btn");
const bagSelectBtn = document.querySelector(".bag-select-btn");

let selectedBagPlantID = 0;
let indexBagSelected = null;
let sellUnitPrice = 0;

// Listeners
bagCancelBtn.addEventListener("click", () => closeBag());

openBagBtn.addEventListener("click", () => {
  clearSelected();
  bagBox.style.display = "block";
  cover.style.display = "block";
  showVege();
});

vegeContainer.addEventListener("click", (e) => selectNewVege(e));

bagSelectBtn.addEventListener("click", () => confirmVege());

// Functions
function showVege() {
  vegeContainer.innerHTML = "";

  InfoBag.forEach((e) => {
    let vegeName = e.name;
    let vegeAmt = e.vegeAmount;
    let container = `
    <div class="vege-element-container general-element-container">
        <div class="element-image"  style="background-image: url(${choosePlant()}"></div>
        <div class="element-info">
            <div class="element-name">${vegeName}</div>
            <div class="element-amount">X${vegeAmt}</div>
        </div>
    </div>
    `;
    function choosePlant() {
      let e = storeData.find((e) => vegeName === e.name);
      return spriteImages[e.plantID][5];
    }
    vegeContainer.innerHTML += container;
  });
}

function selectNewVege(e) {
  indexBagSelected = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
  if (!e.target.classList.contains("vege-element-container")) return;

  // clear all selected items
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].style.border = "2px solid black";
  }
  e.target.style.border = "5px solid red";

  let indexOfplantID = InfoBag[indexBagSelected].vegeID;
  sellUnitPrice = storeData[indexOfplantID].sellPrice;
}

function confirmVege() {
  //
  if (indexBagSelected === null || indexBagSelected === "") {
    alertWindow("Please select a plant!");
    return;
  }
  vegeContainer.parentNode.children[0].children[indexBagSelected].style.border = "2px solid black";

  selectedBagPlantID = indexBagSelected;

  openChooseAmountWindow("sell", indexBagSelected);
  indexBagSelected = null;
}

function closeBag() {
  bagBox.style.display = "none";
  cover.style.display = "none";
  indexBagSelected = null;
}

// Choose Sell Amount----------------------------------------------------------------------------------

// Selectors
// const

// let action = "sell"
// function openChooseAmountWindow(action)) {
//   console.log("opened: " + sellUnitPrice + "   " + InfoBag[selectedBagPlantID].vegeID);
// }

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

storeSelectBtn.addEventListener("click", () => changePlant());

// Functioins
function showMerchandise() {
  merchandiseContainer.innerHTML = "";

  InfoStore.forEach((e) => {
    let plantName = e.name;
    let plantPrice = e.price;
    let container = `
      <div class="merchandise-element-container general-element-container">
            <div class="element-image" style="background-image: url(${choosePlant()}"></div>
            <div class="element-info">
                <div class="element-name">${plantName} Seeds: </div>
                <div class="element-price" style="font-weight: 900">$${plantPrice}</div>
            </div>
        </div>
      `;
    function choosePlant() {
      //   console.log(plantName);
      if (plantName == "Potato") return spriteImages[0][5];
      if (plantName == "Carrot") return spriteImages[1][5];
      if (plantName == "Grape") return spriteImages[2][5];
    }
    merchandiseContainer.innerHTML += container;
  });
}

function selectNewPlant(e) {
  indexSelected = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
  //   console.log(indexSelected);

  // Exit if selected anything other than plant element
  if (!e.target.classList.contains("merchandise-element-container")) return;

  // clear all selected items
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].style.border = "2px solid black";
  }

  e.target.style.border = "5px solid red";

  // fine the unit price of current plant
  unitPrice = storeData[indexSelected].price;
}

function changePlant() {
  if (indexSelected === null || indexSelected === "") {
    alertWindow("Please select a plant!");
    return;
  }

  selectedPlantID = indexSelected;
  indexSelected = null;

  openChooseAmountWindow();
}

function closeStore() {
  //
  storeBox.style.display = "none";
  cover.style.display = "none";
  indexSelected = null;
}

// Selectors
const amtSubtract = document.querySelector(".subtract");
const amtAdd = document.querySelector(".add");
const currAmt = document.querySelector(".curr-amount");
const amtCancelBtn = document.querySelector(".amount-cancel-btn");
const amtConfirmBtn = document.querySelector(".amount-select-btn");

const amtMoney = document.querySelector(".money");
const amtPrice = document.querySelector(".total-price");

const chooseAmtContainer = document.querySelector(".choose-amount-container");

let currAmount = parseInt(currAmt.innerHTML);
let totalPrice = 0;

// Listeners
amtConfirmBtn.addEventListener("click", () => {
  // Check if enough money
  if (InfoUserData.gold < totalPrice) {
    alertWindow("not enough money");
    return;
  }

  let element = InfoSeedInventory.find((e) => e.seedID === selectedPlantID);
  console.log(totalPrice);
  console.log(unitPrice);
  InfoUserData.gold -= totalPrice;
  element.seedAmount += currAmount;

  // update local stroage
  saveUserData();
  saveSeedInventory();

  // rerender
  renderUserInfo();
  renderSeedDisplay();

  closeChooseAmtContainer();
});

amtCancelBtn.addEventListener("click", () => {
  closeChooseAmtContainer();
});

// ADD and SUBTRACT event listeners
amtSubtract.addEventListener("click", () => {
  if (currAmount <= 1) {
    alertWindow("Already at the lowest quantity");
    return;
  }
  currAmount--;
  currAmt.innerHTML = currAmount;
  updateAndRenderTotalPrice();
});

amtAdd.addEventListener("click", () => {
  if (currAmount >= 100) {
    alertWindow("Buy more next time");
    return;
  }
  currAmount++;
  currAmt.innerHTML = currAmount;
  updateAndRenderTotalPrice();
});

// Function
function openChooseAmountWindow() {
  chooseAmtContainer.style.display = "block";
  cover2.style.display = "block";

  updateAndRenderTotalPrice();

  // set amount for choose amount container
  amtMoney.innerHTML = `Your Money: $${InfoUserData.gold}`;
  amtPrice.innerHTML = `Total: $${unitPrice}`;
}

function updateAndRenderTotalPrice() {
  totalPrice = currAmount * unitPrice;
  amtPrice.innerHTML = `Total: $${totalPrice}`;
}

function closeChooseAmtContainer() {
  chooseAmtContainer.style.display = "none";
  cover2.style.display = "none";
  currAmount = 1;
  currAmt.innerHTML = currAmount;
  indexSelected = null;
  showMerchandise();
}

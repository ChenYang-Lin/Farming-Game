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

let action = null;
let indexNum = null;

// Listeners
amtConfirmBtn.addEventListener("click", () => {
  //   console.log(action);
  if (action === "buy") {
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
  } else if (action === "sell") {
    //   sell
    // Check if enough inventory in bag
    // console.log(InfoBag);
    // console.log(indexNum);
    // let selectedVeg = InfoBag[indexNum].vegeID;
    let available = InfoBag[indexNum].vegeAmount;
    if (available < currAmount) {
      alertWindow("not enough inventory!");
      return;
    }
    InfoBag[indexNum].vegeAmount -= currAmount;
    InfoUserData.gold += totalPrice;
  }

  // update local stroage
  saveUserData();
  saveSeedInventory();
  saveInfoBag();

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
function openChooseAmountWindow(a, b) {
  action = a;
  indexNum = b;
  chooseAmtContainer.style.display = "block";
  cover2.style.display = "block";

  updateAndRenderTotalPrice();

  // set amount for choose amount container
  amtMoney.innerHTML = `Your Money: $${InfoUserData.gold}`;
  if (action === "buy") {
    amtPrice.innerHTML = `Total: $${unitPrice}`;
  } else {
    amtPrice.innerHTML = `Total: $${sellUnitPrice}`;
  }
}

function updateAndRenderTotalPrice() {
  if (action === "buy") {
    totalPrice = currAmount * unitPrice;
    amtPrice.innerHTML = `Total: $${totalPrice}`;
  } else if (action === "sell") {
    totalPrice = currAmount * sellUnitPrice;
    amtPrice.innerHTML = `Total: $${totalPrice}`;
  }
}

function closeChooseAmtContainer() {
  chooseAmtContainer.style.display = "none";
  cover2.style.display = "none";
  currAmount = 1;
  currAmt.innerHTML = currAmount;

  if (action === "buy") {
    indexSelected = null;
    showMerchandise();
  } else if (action === "sell") {
    indexBagSelected = null;
    showVege();
  }
}

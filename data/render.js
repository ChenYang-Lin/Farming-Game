function renderUserInfo() {
  let level = InfoUserData.currLevel;
  let currExp = InfoUserData.currExp;
  let need = InfoUserData.expNeededForNextLvl;
  let gold = InfoUserData.gold;
  let lvlPercent = (currExp / need) * expGreenWidth;

  currLevel.innerHTML = `Level: ${level}`;
  expText.innerHTML = `${currExp}/${need}`;
  goldText.innerHTML = `${gold}`;
  expGreen.style.width = `${lvlPercent}px`;
}

function renderSeedDisplay() {
  plantIdOfSelectedIvenItem = InfoSeedInventory[selectedSeedID].seedID;

  seedName = plantsName[plantIdOfSelectedIvenItem].name;
  let element = InfoSeedInventory.find((s) => s.seedID === plantIdOfSelectedIvenItem);
  // console.log(InfoSeedInventory);
  seedAmt = element.seedAmount;
  currSeedInfo.innerHTML = `${seedName} Seeds: ${seedAmt}`;
}

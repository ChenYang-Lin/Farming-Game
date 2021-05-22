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

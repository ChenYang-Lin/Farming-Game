function updateGame() {
  let currtTimeInSec = new Date().getTime() / 1000;

  // update user info

  for (let i = 0; i < numFarmSquare; i++) {
    // console.log(farmContainer);
    let currentPlant = farmContainer.childNodes[i].childNodes[2];

    if (InfoFarmSquares[i] === null || InfoFarmSquares[i] === undefined) continue;
    if (InfoFarmSquares[i].plantID === undefined || InfoFarmSquares[i].plantID === -1) continue;

    if (InfoFarmSquares[i].status !== STAT.GROWING) {
      continue;
    }

    let needTime = plantsData[InfoFarmSquares[i].plantID].needTime;
    let timePassed = currtTimeInSec - InfoFarmSquares[i].plantTime;

    if (timePassed < needTime) {
      needTimeQuarter = needTime / 4;

      const timeProgressBar = document.querySelector(".time-bot" + i);
      let percent = (timePassed / needTime) * 76;

      if (timeProgressBar === null) continue;
      timeProgressBar.style.width = `${percent}px`;

      if (needTime - timePassed < needTimeQuarter) {
        currentPlant.style.backgroundImage = `url(${plantsURL.potato4URL})`;
      } else if (needTime - timePassed < needTimeQuarter * 2) {
        currentPlant.style.backgroundImage = `url(${plantsURL.potato3URL})`;
      } else if (needTime - timePassed < needTimeQuarter * 3) {
        currentPlant.style.backgroundImage = `url(${plantsURL.potato2URL})`;
      } else {
        currentPlant.style.backgroundImage = `url(${plantsURL.potato1URL})`;
      }
    } else {
      currentPlant.style.backgroundImage = `url(${plantsURL.potatoURL})`;
      currentPlant.parentNode.childNodes[0].classList.remove("time-top");
      //   currentPlant.parentNode.childNodes[0].style.display = "none";
      currentPlant.parentNode.childNodes[1].classList.remove("time-bot");
      currentPlant.parentNode.childNodes[1].classList.remove("time-bot" + i);

      currentPlant.parentNode.classList.add("plant-ready");

      InfoFarmSquares[i].status = STAT.READY;
      save();
    }
  }
}

function updateGame() {
  let currtTimeInSec = new Date().getTime() / 1000;

  // update user info

  for (let i = 0; i < numFarmSquare; i++) {
    // console.log(farmContainer);
    let currentPlant = farmContainer.childNodes[i].childNodes[2];

    // Check if need to update
    if (InfoFarmSquares[i] === null || InfoFarmSquares[i] === undefined) continue;
    if (InfoFarmSquares[i].plantID === undefined || InfoFarmSquares[i].plantID === -1) continue;
    if (InfoFarmSquares[i].status !== STAT.GROWING) {
      continue;
    }

    let needTime = plantsData[InfoFarmSquares[i].plantID].needTime;
    let timePassed = currtTimeInSec - InfoFarmSquares[i].plantTime;

    // find out what is current seed in the soil
    currPlantID = InfoFarmSquares[i].plantID;

    if (timePassed < needTime) {
      needTimeQuarter = needTime / 4;

      // Progress Bar
      const timeProgressBar = document.querySelector(".time-bot" + i);
      let percent = (timePassed / needTime) * 76;
      if (timeProgressBar === null) continue;
      timeProgressBar.style.width = `${percent}px`;

      if (needTime - timePassed < needTimeQuarter) {
        currentPlant.style.backgroundImage = getImage(currPlantID, 4);
      } else if (needTime - timePassed < needTimeQuarter * 2) {
        currentPlant.style.backgroundImage = getImage(currPlantID, 3);
      } else if (needTime - timePassed < needTimeQuarter * 3) {
        currentPlant.style.backgroundImage = getImage(currPlantID, 2);
      } else {
        currentPlant.style.backgroundImage = getImage(currPlantID, 1);
      }
    } else {
      currentPlant.style.backgroundImage = getImage(currPlantID, 5);
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

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

    // update time display
    let timeRemaining = needTime - timePassed + 1;
    let day = Math.floor(timeRemaining / 86400);
    let hour = Math.floor((timeRemaining % 86400) / 3600);
    let minute = Math.floor((timeRemaining % 3600) / 60);
    let second = Math.floor((timeRemaining % 60) / 1);
    currentPlant.parentNode.childNodes[3].innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
    currentPlant.parentNode.childNodes[3].classList.add("time-display");

    // find out what is current seed in the soil
    currPlantID = InfoFarmSquares[i].plantID;

    if (timePassed < needTime) {
      needTimeQuarter = needTime / 3;

      // Progress Bar
      const timeProgressBar = document.querySelector(".time-bot" + i);
      let percent = (timePassed / needTime) * 76;
      if (timeProgressBar === null) continue;
      timeProgressBar.style.width = `${percent}px`;

      if (needTime - timePassed < needTimeQuarter) {
        currentPlant.style.backgroundImage = getImage(currPlantID, 3);
      } else if (needTime - timePassed < needTimeQuarter * 2) {
        currentPlant.style.backgroundImage = getImage(currPlantID, 2);
      } else {
        currentPlant.style.backgroundImage = getImage(currPlantID, 1);
      }
    } else {
      currentPlant.style.backgroundImage = getImage(currPlantID, 4);
      // remove time bar and text
      currentPlant.parentNode.childNodes[0].classList.remove("time-top");
      //   currentPlant.parentNode.childNodes[0].style.display = "none";
      currentPlant.parentNode.childNodes[1].classList.remove("time-bot");
      currentPlant.parentNode.childNodes[1].classList.remove("time-bot" + i);
      currentPlant.parentNode.childNodes[3].classList.remove("time-display");
      currentPlant.parentNode.childNodes[3].innerHTML = "";

      currentPlant.parentNode.classList.add("plant-ready");

      InfoFarmSquares[i].status = STAT.READY;
      save();
    }
  }
}

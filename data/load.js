function load() {
  // _________lead user data from local storage
  if (InfoUserData === null) {
    // intro gameplay - if possible
    // init data
    InfoUserData = {
      currLevel: 1,
      currExp: 0,
      expNeededForNextLvl: 10,
      gold: 100,
    };
    saveUserData();
  }
  // update display
  renderUserInfo();

  // init or load land squares
  for (let i = 0; i < numFarmSquare; i++) {
    const farmSquare = document.createElement("div");
    farmSquare.classList.add("square-box");

    const plantDiv = document.createElement("div");
    plantDiv.classList.add("plant");

    const timeTopDiv = document.createElement("div");
    // timeTopDiv.classList.add("time-top");
    const timeBotDiv = document.createElement("div");
    // timeBotDiv.classList.add("time-bot");

    farmSquare.appendChild(timeTopDiv);
    farmSquare.appendChild(timeBotDiv);
    farmSquare.appendChild(plantDiv);

    // farmSquare.childNodes[0].classList.remove('time-top')
    farmContainer.appendChild(farmSquare);

    //_________Load data from local storage
    if (InfoFarmSquares[i] == null) continue;

    let currSquareStatus = InfoFarmSquares[i].status;
    let currPlant = farmContainer.childNodes[i].childNodes[2];
    switch (currSquareStatus) {
      case STAT.EMPTY:
        break;
      case STAT.GROWING:
        updateGrowingData(i);
        break;
      case STAT.READY:
        // console.log(currPlant);
        currPlant.style.backgroundImage = `url(${plantsURL.potatoURL})`;
        currPlant.parentNode.classList.add("plant-ready");
        break;
      case STAT.HARVESTED:
        currPlant.style.backgroundImage = `url(${plantsURL.potato0URL})`;
        break;
      default:
        console.log("initData error");
    }
    //______-End local storage

    if (!InfoFarmSquares[i]) {
      InfoFarmSquares[i] = {};
      save();
    }
  }
  // End inti land squares
}

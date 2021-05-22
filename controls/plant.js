function plant(e, plantID) {
  let parentDiv = e.target.parentNode;
  indexOfCurrLand = Array.prototype.indexOf.call(parentDiv.children, e.target);

  if (InfoFarmSquares[indexOfCurrLand] != null) {
    if (InfoFarmSquares[indexOfCurrLand].status !== STAT.EMPTY) {
      alertWindow("this land is not empty");
      return;
    }
  }

  // update info
  let currtTimeInSec = new Date().getTime() / 1000;
  InfoFarmSquares[indexOfCurrLand] = {
    status: STAT.GROWING,
    plantTime: currtTimeInSec,
    plantID: plantID,
  };
  save();

  // Show time bar
  //   console.log(e.target);
  let currSquare = e.target;
  currSquare.childNodes[0].classList.add("time-top");
  // currSquare.childNodes[0].style.display = "inline";
  currSquare.childNodes[1].classList.add("time-bot");
  currSquare.childNodes[1].classList.add("time-bot" + indexOfCurrLand);

  //   plantsData[InfoFarmSquares[indexOfCurrLand].plantID] // current square's plantID
  //   .needTime

  // Update image
  //   let currPlant = e.target.childNodes[0];
  //   currPlant.style.backgroundImage = `url(${plantsURL.potato1URL})`;
}

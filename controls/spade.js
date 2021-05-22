function spade(e) {
  let parentDiv = e.target.parentNode;
  indexOfCurrLand = Array.prototype.indexOf.call(parentDiv.children, e.target);

  if (InfoFarmSquares[indexOfCurrLand] != null) {
    if (InfoFarmSquares[indexOfCurrLand].status !== STAT.HARVESTED) {
      alertWindow("nothing to spade");
      return;
    }
  } else {
    alertWindow("nothing to spade");
    return;
  }

  // update info
  let currPlant = farmContainer.childNodes[indexOfCurrLand].childNodes[2];
  currPlant.style.backgroundImage = "";

  InfoFarmSquares[indexOfCurrLand] = {
    status: STAT.EMPTY,
    plantTime: null,
    plantID: null,
  };
  save();
}

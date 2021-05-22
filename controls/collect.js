function collect(e) {
  let parentDiv = e.target.parentNode;
  indexOfCurrLand = Array.prototype.indexOf.call(parentDiv.children, e.target);

  if (InfoFarmSquares[indexOfCurrLand] != null) {
    if (InfoFarmSquares[indexOfCurrLand].status !== STAT.READY) {
      alertWindow("nothing to harvest");
      return;
    }
  } else {
    alertWindow("nothing to harvest");
    return;
  }

  // update info
  let currPlant = farmContainer.childNodes[indexOfCurrLand].childNodes[2];
  currPlant.style.backgroundImage = `url(${plantsURL.potato0URL})`;
  currPlant.parentElement.classList.remove("plant-ready");
  // potatoes ++ `

  InfoFarmSquares[indexOfCurrLand] = {
    status: STAT.HARVESTED,
    plantTime: null,
    plantID: null,
  };
  save();
}

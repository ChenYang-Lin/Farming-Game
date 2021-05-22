function updateGrowingData(i) {
  let currSquare = farmContainer.childNodes[i];
  currSquare.childNodes[0].classList.add("time-top");
  currSquare.childNodes[1].classList.add("time-bot");
  currSquare.childNodes[1].classList.add("time-bot" + i);
}

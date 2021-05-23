function updateFarmSquare(e) {
  if (e.target.classList[0] !== "square-box") return;

  if (currInstruction === "") return;

  if (currInstruction === "seed") {
    let element = InfoSeedInventory.find((s) => s.seedID === selectedSeedID);
    let index = element.seedID;
    if (element.seedAmount <= 0) {
      alertWindow("Not Enough seeds");
      return;
    }
    let plantID = element.seedID;
    InfoSeedInventory[index].seedAmount--;
    saveSeedInventory();
    renderSeedDisplay();
    plant(e, plantID);
  }

  let plantOnLand = true;
  if (currInstruction === "water" && plantOnLand) {
    water(e);
  }

  if (currInstruction === "collect") {
    collect(e);
  }

  if (currInstruction === "spade") {
    spade(e);
  }
}

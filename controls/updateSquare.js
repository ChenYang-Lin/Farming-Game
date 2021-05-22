function updateFarmSquare(e) {
  if (e.target.classList[0] !== "square-box") return;

  if (currInstruction === "") return;

  if (currInstruction === "seed") {
    let plantID = 0;
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

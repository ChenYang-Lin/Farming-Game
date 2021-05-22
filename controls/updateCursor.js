function updateCursor(e) {
  //   console.log(e.target);
  if (e.target.classList[1] === "seed") {
    currInstruction = "seed";
    let cursorURL = "./images/ui/seedCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;
  }
  if (e.target.classList[1] === "water") {
    currInstruction = "water";
    let cursorURL = "./images/ui/waterCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;
  }
  if (e.target.classList[1] === "spade") {
    currInstruction = "spade";
    let cursorURL = "./images/ui/spadeCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 50 100, auto`;
  }
  if (e.target.classList[1] === "collect") {
    currInstruction = "collect";
    let cursorURL = "./images/ui/collectCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;
  }
  if (e.target.classList[1] === "cancel") {
    currInstruction = "";
    let cursorURL = "";
    document.body.style.cursor = `url(${cursorURL}), auto`;
  }
}

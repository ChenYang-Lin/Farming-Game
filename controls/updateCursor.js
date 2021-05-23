function updateCursor(e) {
  if (e.target.parentNode.classList[0] !== "ui-container") {
    if (e.target.classList[0] === "select-seeds") {
      clearSelected(e.target.parentNode.parentNode);
    }
    return;
  }

  clearSelected(uiContainer);

  if (e.target.classList[1] === "seed") {
    currInstruction = "seed";
    let cursorURL = "./images/ui/seedCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;

    e.target.classList.toggle("selected-item");
  }
  if (e.target.classList[1] === "water") {
    currInstruction = "water";
    let cursorURL = "./images/ui/waterCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;

    e.target.classList.toggle("selected-item");
  }
  if (e.target.classList[1] === "spade") {
    currInstruction = "spade";
    let cursorURL = "./images/ui/spadeCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 50 100, auto`;

    e.target.classList.toggle("selected-item");
  }
  if (e.target.classList[1] === "collect") {
    currInstruction = "collect";
    let cursorURL = "./images/ui/collectCursor.png";
    document.body.style.cursor = `url(${cursorURL}) 30 40, auto`;

    e.target.classList.toggle("selected-item");
  }
  if (e.target.classList[1] === "cancel") {
    currInstruction = "";
    let cursorURL = "";
    document.body.style.cursor = `url(${cursorURL}), auto`;
  }
}

function clearSelected() {
  document.body.style.cursor = `url(${""}), auto`;
  for (let i = 0; i < uiContainer.children.length; i++) {
    if (uiContainer.children[i].classList.contains("selected-item")) {
      uiContainer.children[i].classList.toggle("selected-item");
    }
  }
}

function resetCursor() {
  document.body.style.cursor = `url(${""}), auto`;
}

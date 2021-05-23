const plantsData = [
  {
    needTime: 5,
  },
  {
    needTime: 15,
  },
  {
    needTime: 30,
  },
];

// const plantsURL = {
//   potato1URL: "./images/potato/potato1.png",
//   potato2URL: "./images/potato/potato2.png",
//   potato3URL: "./images/potato/potato3.png",
//   potato4URL: "./images/potato/potato4.png",
//   potatoURL: "./images/potato/potato.png",
//   potato0URL: "./images/potato/potato0.png",
//   // carrot
//   carrotURL: "./images/carrot/carrot.png",
//   carrot0URL: "./images/carrot/carrot0.png",
//   carrot1URL: "./images/carrot/carrot1.png",
//   carrot2URL: "./images/carrot/carrot2.png",
//   carrot3URL: "./images/carrot/carrot3.png",
//   carrot4URL: "./images/carrot/carrot4.png",
// };

const plantsName = [
  {
    name: "Potato",
  },
  {
    name: "Carrot",
  },
  {
    name: "Grape",
  },
];

const spriteImages = [
  [
    // potato
    ["./images/potato/potato0.png"],
    ["./images/potato/potato1.png"],
    ["./images/potato/potato2.png"],
    ["./images/potato/potato3.png"],
    ["./images/potato/potato4.png"],
    ["./images/potato/potato.png"],
  ],
  [
    // carrots
    ["./images/carrot/carrot0.png"],
    ["./images/carrot/carrot1.png"],
    ["./images/carrot/carrot2.png"],
    ["./images/carrot/carrot3.png"],
    ["./images/carrot/carrot4.png"],
    ["./images/carrot/carrot.png"],
  ],
  [
    // grape
    ["./images/grape/grape0.png"],
    ["./images/grape/grape1.png"],
    ["./images/grape/grape2.png"],
    ["./images/grape/grape3.png"],
    ["./images/grape/grape4.png"],
    ["./images/grape/grape.png"],
  ],
];

function getImage(currPlantID, index) {
  currURL = spriteImages[currPlantID][index];
  return `url(${currURL})`;
}

const storeData = [
  {
    plantID: 0,
    price: 2,
    name: "Potato",
  },
  {
    plantID: 1,
    price: 10,
    name: "Carrot",
  },
  {
    plantID: 2,
    price: 30,
    name: "Grape",
  },
];

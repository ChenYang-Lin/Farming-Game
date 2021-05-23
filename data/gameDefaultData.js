const plantsData = [
  {
    needTime: 5,
  },
  {
    needTime: 20,
  },
  {
    // 1 min
    needTime: 60,
  },
  {
    // 3 min
    needTime: 180,
  },
  {
    // 10 min
    needTime: 600,
  },
  {
    // 30 min
    needTime: 1800,
  },
  {
    // 1 hour
    needTime: 3600,
  },
  {
    // 3 hour
    needTime: 10800,
  },
  {
    // 10 hour
    needTime: 36000,
  },
  {
    // 1 day
    needTime: 86400,
  },
  {
    // 2 day
    needTime: 172800,
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
  {
    name: "Broccoli",
  },
  {
    name: "Cauliflower",
  },
  {
    name: "Eggplant",
  },
  {
    name: "Greenpepper",
  },
  {
    name: "Pumpkin",
  },
  {
    name: "Scallion",
  },
  {
    name: "Stringbean",
  },
  {
    name: "Watermelon",
  },
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
    sellPrice: 4,
  },
  {
    plantID: 1,
    price: 10,
    name: "Carrot",
    sellPrice: 16,
  },
  {
    plantID: 2,
    price: 30,
    name: "Grape",
    sellPrice: 40,
  },
  {
    plantID: 3,
    price: 30,
    name: "Broccoli",
    sellPrice: 40,
  },
  {
    plantID: 4,
    price: 30,
    name: "Cauliflower",
    sellPrice: 40,
  },
  {
    plantID: 5,
    price: 30,
    name: "Eggplant",
    sellPrice: 40,
  },
  {
    plantID: 6,
    price: 30,
    name: "Greenpepper",
    sellPrice: 40,
  },
  {
    plantID: 7,
    price: 30,
    name: "Pumpkin",
    sellPrice: 40,
  },
  {
    plantID: 8,
    price: 30,
    name: "Scallion",
    sellPrice: 40,
  },
  {
    plantID: 9,
    price: 30,
    name: "Stringbean",
    sellPrice: 40,
  },
  {
    plantID: 10,
    price: 30,
    name: "Watermelon",
    sellPrice: 40,
  },
];

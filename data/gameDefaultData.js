// const plantsData = [
//   {
//     needTime: 5,
//   },
//   {
//     needTime: 20,
//   },
//   {
//     // 1 min
//     needTime: 60,
//   },
//   {
//     // 3 min
//     // needTime: 180,
//     needTime: 5,
//   },
//   {
//     // 10 min
//     // needTime: 600,
//     needTime: 5,
//   },
//   {
//     // 30 min
//     // needTime: 1800,
//     needTime: 5,
//   },
//   {
//     // 1 hour
//     // needTime: 3600,
//     needTime: 5,
//   },
//   {
//     // 3 hour
//     // needTime: 10800,
//     needTime: 5,
//   },
//   {
//     // 10 hour
//     // needTime: 36000,
//     needTime: 5,
//   },
//   {
//     // 1 day
//     // needTime: 86400,
//     needTime: 5,
//   },
//   {
//     // 2 day
//     // needTime: 172800,
//     needTime: 5,
//   },
// ];

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
    sellPrice: 3,
    unlock: 1,
    exp: 1,
  },
  {
    plantID: 1,
    price: 10,
    name: "Carrot",
    sellPrice: 12,
    unlock: 2,
    exp: 2,
  },
  {
    plantID: 2,
    price: 30,
    name: "Grape",
    unlock: 3,
    sellPrice: 35,
    exp: 3,
  },
  {
    plantID: 3,
    price: 80,
    name: "Broccoli",
    sellPrice: 90,
    unlock: 4,
    exp: 5,
  },
  {
    plantID: 4,
    price: 160,
    name: "Cauliflower",
    sellPrice: 180,
    unlock: 5,
    exp: 8,
  },
  {
    plantID: 5,
    price: 220,
    name: "Eggplant",
    sellPrice: 250,
    unlock: 6,
    exp: 12,
  },
  {
    plantID: 6,
    price: 300,
    name: "Greenpepper",
    sellPrice: 340,
    unlock: 7,
    exp: 19,
  },
  {
    plantID: 7,
    price: 400,
    name: "Pumpkin",
    sellPrice: 450,
    unlock: 8,
    exp: 28,
  },
  {
    plantID: 8,
    price: 460,
    name: "Scallion",
    sellPrice: 520,
    unlock: 9,
    exp: 41,
  },
  {
    plantID: 9,
    price: 500,
    name: "Stringbean",
    sellPrice: 570,
    unlock: 10,
    exp: 54,
  },
  {
    plantID: 10,
    price: 600,
    name: "Watermelon",
    sellPrice: 690,
    unlock: 11,
    exp: 60,
  },
];

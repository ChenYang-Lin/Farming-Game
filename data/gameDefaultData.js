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
    // needTime: 180,
    needTime: 5,
  },
  {
    // 10 min
    // needTime: 600,
    needTime: 5,
  },
  {
    // 30 min
    // needTime: 1800,
    needTime: 5,
  },
  {
    // 1 hour
    // needTime: 3600,
    needTime: 5,
  },
  {
    // 3 hour
    // needTime: 10800,
    needTime: 5,
  },
  {
    // 10 hour
    // needTime: 36000,
    needTime: 5,
  },
  {
    // 1 day
    // needTime: 86400,
    needTime: 5,
  },
  {
    // 2 day
    // needTime: 172800,
    needTime: 5,
  },
];

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
//     needTime: 180,
//   },
//   {
//     // 10 min
//     needTime: 600,
//   },
//   {
//     // 30 min
//     needTime: 1800,
//   },
//   {
//     // 1 hour
//     needTime: 3600,
//   },
//   {
//     // 3 hour
//     needTime: 10800,
//   },
//   {
//     // 10 hour
//     needTime: 36000,
//   },
//   {
//     // 1 day
//     needTime: 86400,
//   },
//   {
//     // 2 day
//     needTime: 172800,
//   },
// ];

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
  },
  {
    plantID: 1,
    price: 10,
    name: "Carrot",
    sellPrice: 12,
  },
  {
    plantID: 2,
    price: 30,
    name: "Grape",
    sellPrice: 35,
  },
  {
    plantID: 3,
    price: 80,
    name: "Broccoli",
    sellPrice: 90,
  },
  {
    plantID: 4,
    price: 160,
    name: "Cauliflower",
    sellPrice: 180,
  },
  {
    plantID: 5,
    price: 220,
    name: "Eggplant",
    sellPrice: 250,
  },
  {
    plantID: 6,
    price: 300,
    name: "Greenpepper",
    sellPrice: 340,
  },
  {
    plantID: 7,
    price: 400,
    name: "Pumpkin",
    sellPrice: 450,
  },
  {
    plantID: 8,
    price: 460,
    name: "Scallion",
    sellPrice: 520,
  },
  {
    plantID: 9,
    price: 500,
    name: "Stringbean",
    sellPrice: 570,
  },
  {
    plantID: 10,
    price: 600,
    name: "Watermelon",
    sellPrice: 690,
  },
];

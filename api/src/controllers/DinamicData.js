var dinamicDB;
const registerPlayer = (ID) => {};
const releasePlayer = () => {};
const standarModel = {
  status: "creating",
  order: ["target1", "target3", "target4", "target2"],
  Bank: {
    BankHenryCoins: 200000,
    properties: [],
  },
  PlayerData: {
    target1: {
      ID: null,
      username: null,
      henryCoins: 1500,
      properties: [],
      cards: [],
    },
    target2: {
      ID: null,
      username: null,
      henryCoins: 1500,
      properties: [],
      cards: [],
    },
    target3: {
      ID: null,
      username: null,
      henryCoins: 1500,
      properties: [],
      cards: [],
    },
    target4: {
      ID: null,
      username: null,
      henryCoins: 1500,
      properties: [],
      cards: [],
    },
  },
  playerPosition: {
    target1: { box: 0, x: 120, y: 120 },
    target2: { box: 0, x: 40, y: 120 },
    target3: { box: 0, x: 120, y: 40 },
    target4: { box: 0, x: 40, y: 40 },
  },
};

const newGame = (ID, players) => {
  dinamicDB[ID] = standarModel;
};

module.exports = {
  dinamicDB,
  newGame,
  deleteGame,
};

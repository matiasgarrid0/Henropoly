var dinamicDB ={};
const standarModel = {
  status: "creating",
  order: ["target1", "target3", "target4", "target2"],
  actualTurn:'target1',
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
  //setear order: ["target1", "target3", "target4", "target2"],
  dinamicDB[ID].PlayerData.target1.ID = players[0].ID ? players[0].ID : null;
  dinamicDB[ID].PlayerData.target1.username = players[0].username
    ? players[0].username
    : null;
  dinamicDB[ID].PlayerData.target2.ID = players[1].ID ? players[1].ID : null;
  dinamicDB[ID].PlayerData.target2.username = players[1].username
    ? players[1].username
    : null;
  dinamicDB[ID].PlayerData.target3.ID = players[2].ID ? players[2].ID : null;
  dinamicDB[ID].PlayerData.target3.username = players[2].username
    ? players[2].username
    : null;
  dinamicDB[ID].PlayerData.target4.ID = players[3].ID ? players[3].ID : null;
  dinamicDB[ID].PlayerData.target4.username = players[3].username
    ? players[3].username
    : null;
  return dinamicDB[ID];
};
module.exports = {
  dinamicDB,
  newGame
};

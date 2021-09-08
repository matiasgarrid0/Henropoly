let player = {
  properties: null,
  henrycoin: 1500,
  position: 0,
};
const cards = {
  table: [
    {
      id: 0,
      type: "exit",

      name: null,

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 1,
      type: "property",
      name: "CSS",
      versionAlpha: 2,
      versionOne: 10,
      versionTwo: 30,
      versionThree: 90,
      versionFour: 160,
      versionPremium: 250,
      aditional: "además V4.0",
      commonVersion: 50,
      premiumVersion: 50,
      licenseValue: 30,
      color: "brown",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 2,
      type: "comunal",

      name: "comunal",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 3,
      type: "property",
      name: "HTML",
      versionAlpha: 4,
      versionOne: 20,
      versionTwo: 60,
      versionThree: 80,
      versionFour: 320,
      versionPremium: 450,
      aditional: "además V4.0",
      commonVersion: 50,
      premiumVersion: 50,
      licenseValue: 30,
      color: "brown",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 4,
      type: "tax",

      name: "tax",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 5,
      type: "railway",
      name: "HENRY M1",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,
      takeCheckpoint: 25,
      twoCheckpoint: 50,
      threeCheckpoint: 100,
      fourCheckpoint: 200,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 6,
      type: "property",
      name: "Postgres",
      versionAlpha: 6,
      versionOne: 30,
      versionTwo: 90,
      versionThree: 270,
      versionFour: 400,
      versionPremium: 550,
      aditional: "además V4.0",
      commonVersion: 50,
      premiumVersion: 50,
      licenseValue: 50,
      color: "light-blue",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 7,
      type: "lucky",

      name: "lucky",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 8,
      type: "property",
      name: "SQLITE",
      versionAlpha: 6,
      versionOne: 30,
      versionTwo: 90,
      versionThree: 270,
      versionFour: 400,
      versionPremium: 550,
      aditional: "además V4.0",
      commonVersion: 50,
      premiumVersion: 50,
      licenseValue: 50,
      color: "light-blue",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 9,
      type: "property",
      name: "MySQL",
      versionAlpha: 8,
      versionOne: 40,
      versionTwo: 100,
      versionThree: 300,
      versionFour: 450,
      versionPremium: 600,
      aditional: "además V4.0",
      commonVersion: 50,
      premiumVersion: 50,
      licenseValue: 60,
      color: "light-blue",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 10,
      type: "jail",

      name: "jail",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 11,
      type: "property",
      name: "C#",
      versionAlpha: 10,
      versionOne: 50,
      versionTwo: 150,
      versionThree: 450,
      versionFour: 625,
      versionPremium: 750,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 70,
      color: "pink",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 12,
      type: "service",
      name: "ELECTRICITY COMPANY",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,
      licenseValue: 75,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 13,
      type: "property",
      name: "C++",
      versionAlpha: 10,
      versionOne: 50,
      versionTwo: 150,
      versionThree: 450,
      versionFour: 625,
      versionPremium: 750,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 70,
      color: "pink",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 14,
      type: "property",
      name: "C",
      versionAlpha: 12,
      versionOne: 60,
      versionTwo: 180,
      versionThree: 500,
      versionFour: 700,
      versionPremium: 900,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 80,
      color: "pink",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 15,
      type: "railway",
      name: "HENRY M2",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,
      takeCheckpoint: 25,
      twoCheckpoint: 50,
      threeCheckpoint: 100,
      fourCheckpoint: 200,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 16,
      type: "property",
      name: "BootStrap",
      versionAlpha: 14,
      versionOne: 70,
      versionTwo: 200,
      versionThree: 550,
      versionFour: 750,
      versionPremium: 950,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 90,
      color: "orange",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 17,
      type: "comunal",

      name: "comunal",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 18,
      type: "property",
      name: "Diseño UI/UX",
      versionAlpha: 14,
      versionOne: 70,
      versionTwo: 200,
      versionThree: 550,
      versionFour: 750,
      versionPremium: 950,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 90,
      color: "orange",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 19,
      type: "property",
      name: "Express",
      versionAlpha: 16,
      versionOne: 80,
      versionTwo: 220,
      versionThree: 600,
      versionFour: 800,
      versionPremium: 1000,
      aditional: "además V4.0",
      commonVersion: 100,
      premiumVersion: 100,
      licenseValue: 100,
      color: "orange",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 20,
      type: "stop",

      name: null,

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 21,
      type: "property",
      name: "Vue",
      versionAlpha: 18,
      versionOne: 90,
      versionTwo: 250,
      versionThree: 700,
      versionFour: 875,
      versionPremium: 1050,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 110,
      color: "red",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 22,
      type: "lucky",

      name: "lucky",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 23,
      type: "property",
      name: "Angular",
      versionAlpha: 18,
      versionOne: 90,
      versionTwo: 250,
      versionThree: 700,
      versionFour: 875,
      versionPremium: 1050,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 110,
      color: "red",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 24,
      type: "property",
      name: "Node",
      versionAlpha: 20,
      versionOne: 100,
      versionTwo: 300,
      versionThree: 750,
      versionFour: 925,
      versionPremium: 1100,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 120,
      color: "red",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 25,
      type: "railway",
      name: "HENRY M3",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,
      takeCheckpoint: 25,
      twoCheckpoint: 50,
      threeCheckpoint: 100,
      fourCheckpoint: 200,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 26,
      type: "property",
      name: "Python",
      versionAlpha: 22,
      versionOne: 110,
      versionTwo: 330,
      versionThree: 800,
      versionFour: 975,
      versionPremium: 1150,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 130,
      color: "yellow",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 27,
      type: "property",
      name: "Java",
      versionAlpha: 22,
      versionOne: 110,
      versionTwo: 330,
      versionThree: 800,
      versionFour: 975,
      versionPremium: 1150,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 130,
      color: "yellow",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 28,
      type: "service",
      name: "INTERNET COMPANY",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,
      licenseValue: 75,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 29,
      type: "property",
      name: "JavaScript",
      versionAlpha: 22,
      versionOne: 110,
      versionTwo: 330,
      versionThree: 800,
      versionFour: 975,
      versionPremium: 1150,
      aditional: "además V4.0",
      commonVersion: 150,
      premiumVersion: 150,
      licenseValue: 130,
      color: "yellow",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 30,
      type: "goJail",

      name: null,

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      id: 31,
      type: "property",
      name: "Sequelize",
      versionAlpha: 26,
      versionOne: 130,
      versionTwo: 390,
      versionThree: 900,
      versionFour: 1100,
      versionPremium: 1275,
      aditional: "además V4.0",
      commonVersion: 200,
      premiumVersion: 200,
      licenseValue: 150,
      color: "green",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 32,
      type: "property",
      name: "GitHub",
      versionAlpha: 26,
      versionOne: 130,
      versionTwo: 390,
      versionThree: 900,
      versionFour: 1100,
      versionPremium: 1275,
      aditional: "además V4.0",
      commonVersion: 200,
      premiumVersion: 200,
      licenseValue: 150,
      color: "green",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 33,
      type: "comunal",

      name: "comunal",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 34,
      type: "property",
      name: "Git",
      versionAlpha: 28,
      versionOne: 150,
      versionTwo: 450,
      versionThree: 1000,
      versionFour: 1200,
      versionPremium: 1400,
      aditional: "además V4.0",
      commonVersion: 200,
      premiumVersion: 200,
      licenseValue: 160,
      color: "green",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 35,
      type: "railway",
      name: "HENRY M4",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,
      takeCheckpoint: 25,
      twoCheckpoint: 50,
      threeCheckpoint: 100,
      fourCheckpoint: 200,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 36,
      type: "lucky",

      name: "lucky",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 37,
      type: "property",
      name: "Redux",
      versionAlpha: 35,
      versionOne: 175,
      versionTwo: 500,
      versionThree: 1100,
      versionFour: 1300,
      versionPremium: 1500,
      aditional: "además V4.0",
      commonVersion: 200,
      premiumVersion: 200,
      licenseValue: 175,
      color: "blue",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 38,
      type: "taxVip",

      name: "tax-VIP",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },

    {
      id: 39,
      type: "property",
      name: "React",
      versionAlpha: 50,
      versionOne: 200,
      versionTwo: 600,
      versionThree: 1400,
      versionFour: 1700,
      versionPremium: 2000,
      aditional: "además V4.0",
      commonVersion: 200,
      premiumVersion: 200,
      licenseValue: 200,
      color: "blue",

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
    },
    {
      id: 40,
      type: "start",

      name: "start",

      versionAlpha: null,

      versionOne: null,

      versionTwo: null,

      versionThree: null,

      versionFour: null,

      versionPremium: null,

      aditional: null,

      commonVersion: null,

      premiumVersion: null,

      licenseValue: null,

      color: null,

      takeCheckpoint: null,

      twoCheckpoint: null,

      threeCheckpoint: null,

      fourCheckpoint: null,

      numberBox: null,

      tableMasterID: null,
      belongsTo: false,
    },
  ],
};

let jose = {
  properties: null,
  henrycoin: 1500,
  position: 0,
}; //HIPOTECAR
function gameActionsBoard(position, dice, player, action, cards, type) {
  //   if (position === 1) {
  //     if (action === "comprar") {
  //       return (jose = {
  //         properties: "CSS",
  //         henrycoin: 1500 - 5,
  //         position: 1,
  //       });
  //     } else {
  //       return (jose = {
  //         properties: null,
  //         henrycoin: 1500,
  //         position: 1,
  //       });
  //     }
  //   }

  if (cards.table[position].type === "properties") {

  }
  if (cards.table[position].type === "comunal") {
      
}

  switch (position) {
    case 0:
    // |||||||||||||||||||||||||||||||||||
    case 1:
      if (action === "comprar") {
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 2:

    case 3:
      if (action === "comprar") {
        return (player = {
          properties: "HTML",
          henrycoin: player.henrycoin - cards,
          position: 2,
        });
      } else {
        return (player = {
          ...player,
          position: 2,
        });
      }
    case 4:

    case 5:

    case 6:
      if (action === "comprar") {
        return (player = {
          properties: "Postgres",
          henrycoin: player.henrycoin - cards,
          position: 6,
        });
      } else {
        return (player = {
          ...player,
          position: 6,
        });
      }
    case 7:

    case 8:
      if (action === "comprar") {
        return (player = {
          properties:
            player.properties === null
              ? "Postgres"
              : player.properties + "Postgres",
          henrycoin: player.henrycoin - cards,
          position: 8,
        });
      } else {
        return (player = {
          ...player,
          position: 8,
        });
      }
    case 9:
      if (action === "comprar") {
        return (player = {
          properties: "MySQL",
          henrycoin: player.henrycoin - cards,
          position: 9,
        });
      } else {
        return (player = {
          ...player,
          position: 9,
        });
      }
    //
    case 10:
    //jail

    case 11:
      if (action === "comprar") {
        return (player = {
          properties: "C#",
          henrycoin: player.henrycoin - cards,
          position: 11,
        });
      } else {
        return (player = {
          ...player,
          position: 11,
        });
      }

    case 12:
      if (action === "comprar") {
        return (player = {
          properties: "service",
          henrycoin: player.henrycoin - cards,
          position: 12,
        });
      } else {
        return (player = {
          ...player,
          position: 12,
        });
      }

    case 13:
      if (action === "comprar") {
        return (player = {
          properties: "C++",
          henrycoin: player.henrycoin - cards,
          position: 13,
        });
      } else {
        return (player = {
          ...player,
          position: 13,
        });
      }

    case 14:
      if (action === "comprar") {
        return (player = {
          properties: "C",
          henrycoin: player.henrycoin - cards,
          position: 14,
        });
      } else {
        return (player = {
          ...player,
          position: 14,
        });
      }

    case 15:
      if (action === "comprar") {
        return (player = {
          properties: "railway",
          henrycoin: player.henrycoin - cards,
          position: 15,
        });
      } else {
        return (player = {
          ...player,
          position: 15,
        });
      }

    case 16:
      if (action === "comprar") {
        return (player = {
          properties: "Boostrap",
          henrycoin: player.henrycoin - cards,
          position: 16,
        });
      } else {
        return (player = {
          ...player,
          position: 16,
        });
      }

    case 17:
    //comunal

    case 18:
      if (action === "comprar") {
        return (player = {
          properties: "Diseño UI/UX",
          henrycoin: player.henrycoin - cards,
          position: 18,
        });
      } else {
        return (player = {
          ...player,
          position: 18,
        });
      }

    case 19:
      if (action === "comprar") {
        return (player = {
          properties: "Express",
          henrycoin: player.henrycoin - cards,
          position: 19,
        });
      } else {
        return (player = {
          ...player,
          position: 19,
        });
      }

    case 20:
    //park
    case 21:
      if (action === "comprar") {
        return (player = {
          properties: "Vue",
          henrycoin: player.henrycoin - cards,
          position: 21,
        });
      } else {
        return (player = {
          ...player,
          position: 21,
        });
      }
    case 23:
      if (action === "comprar") {
        return (player = {
          properties: "Angular",
          henrycoin: player.henrycoin - cards,
          position: 23,
        });
      } else {
        return (player = {
          ...player,
          position: 23,
        });
      }
    case 24:
      if (action === "comprar") {
        return (player = {
          properties: "Node",
          henrycoin: player.henrycoin - cards,
          position: 24,
        });
      } else {
        return (player = {
          ...player,
          position: 24,
        });
      }
    case 25:
      if (action === "comprar") {
        return (player = {
          properties: "HENRY M3",
          henrycoin: player.henrycoin - cards,
          position: 25,
        });
      } else {
        return (player = {
          ...player,
          position: 25,
        });
      }
    case 26:
      if (action === "comprar") {
        return (player = {
          properties: "Python",
          henrycoin: player.henrycoin - cards,
          position: 26,
        });
      } else {
        return (player = {
          ...player,
          position: 26,
        });
      }
    case 27:
      if (action === "comprar") {
        return (player = {
          properties: "Java",
          henrycoin: player.henrycoin - cards,
          position: 27,
        });
      } else {
        return (player = {
          ...player,
          position: 27,
        });
      }

    case 29:
      if (action === "comprar") {
        return (player = {
          properties: "Javascript",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }

    case 31:
      if (action === "comprar") {
        return (player = {
          properties: "Sequelize",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 32:
      if (action === "comprar") {
        return (player = {
          properties: "GitHub",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 33:
      if (action === "comprar") {
        return (player = {
          properties: "comunal", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 34:
      if (action === "comprar") {
        return (player = {
          properties: "Git",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 35:
      if (action === "comprar") {
        return (player = {
          properties: "Henry M4", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 36:
      if (action === "comprar") {
        return (player = {
          properties: "lucky", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 37:
      if (action === "comprar") {
        return (player = {
          properties: "Redux",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 38:
      if (action === "comprar") {
        return (player = {
          properties: "tax", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 39:
      if (action === "comprar") {
        return (player = {
          properties: "React",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    default:
      break;
  }
}

console.log(
  gameActionsBoard(1, 6, jose, "comprar", cards.table[1].versionAlpha)
);

// module.exports = { player }

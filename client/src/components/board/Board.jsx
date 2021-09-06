import React from "react";
import Logo from './img/Henropoly.png'
import "./board.css";
import Card from "./Card";
import CardComunal from "./CardComunal";
import CardLucky from "./CardLucky"
import CardRail from "./CardRail"
import CardTaxes from "./CardTaxes"
import { AiFillHtml5 } from "react-icons/ai";
import { GiLockedChest } from "react-icons/gi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import {
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiGithub,
  SiRedux,
} from "react-icons/si";
import { DiSqllite, DiJava,DiReact, DiHtml5 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FcWiFiLogo,FcIdea } from "react-icons/fc";
import {
  FaVuejs,
  FaAngular,
  FaNode,
  FaPython,
  FaGitSquare,
  FaReact,
  FaQuestion,
  FaTrain,
  FaMoneyBillAlt
  
} from "react-icons/fa";

const Board = () => {
 
  const cards ={

    "table": [
    
    {
    "id": 0,
    "type": "exit",
    
    "name": null,
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 1,
    "type": "property",
    "name": " CSS",
    "versionAlpha": 2,
    "versionOne": 10,
    "versionTwo": 30,
    "versionThree": 90,
    "versionFour": 160,
    "versionPremium": 250,
    "aditional": "además V4.0",
    "commonVersion": 50,
    "premiumVersion": 50,
    "licenseValue": 30,
    "color": "brown",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 2,
    "type": "comunal",
    
    "name": "comunal",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 3,
    "type": "property",
    "name": "HTML",
    "versionAlpha": 4,
    "versionOne": 20,
    "versionTwo": 60,
    "versionThree": 80,
    "versionFour": 320,
    "versionPremium": 450,
    "aditional": "además V4.0",
    "commonVersion": 50,
    "premiumVersion": 50,
    "licenseValue": 30,
    "color": "brown",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 4,
    "type": "tax",
    
    "name": "tax",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 5,
    "type": "railway",
    "name": "HENRY M1",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    "takeCheckpoint": 25,
    "twoCheckpoint": 50,
    "threeCheckpoint": 100,
    "fourCheckpoint": 200,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 6,
    "type": "property",
    "name": "Postgres",
    "versionAlpha": 6,
    "versionOne": 30,
    "versionTwo": 90,
    "versionThree": 270,
    "versionFour": 400,
    "versionPremium": 550,
    "aditional": "además V4.0",
    "commonVersion": 50,
    "premiumVersion": 50,
    "licenseValue": 50,
    "color": "light-blue",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 7,
    "type": "lucky",
    
    "name": "lucky",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 8,
    "type": "property",
    "name": "SQLITE",
    "versionAlpha": 6,
    "versionOne": 30,
    "versionTwo": 90,
    "versionThree": 270,
    "versionFour": 400,
    "versionPremium": 550,
    "aditional": "además V4.0",
    "commonVersion": 50,
    "premiumVersion": 50,
    "licenseValue": 50,
    "color": "light-blue",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 9,
    "type": "property",
    "name": "MySQL",
    "versionAlpha": 8,
    "versionOne": 40,
    "versionTwo": 100,
    "versionThree": 300,
    "versionFour": 450,
    "versionPremium": 600,
    "aditional": "además V4.0",
    "commonVersion": 50,
    "premiumVersion": 50,
    "licenseValue": 60,
    "color": "light-blue",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 10,
    "type": "jail",
    
    "name": "jail",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 11,
    "type": "property",
    "name": "C#",
    "versionAlpha": 10,
    "versionOne": 50,
    "versionTwo": 150,
    "versionThree": 450,
    "versionFour": 625,
    "versionPremium": 750,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 70,
    "color": "pink",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 12,
    "type": "service",
    "name": "ELECTRICITY COMPANY",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    "licenseValue": 75,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 13,
    "type": "property",
    "name": "C++",
    "versionAlpha": 10,
    "versionOne": 50,
    "versionTwo": 150,
    "versionThree": 450,
    "versionFour": 625,
    "versionPremium": 750,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 70,
    "color": "pink",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 14,
    "type": "property",
    "name": "C",
    "versionAlpha": 12,
    "versionOne": 60,
    "versionTwo": 180,
    "versionThree": 500,
    "versionFour": 700,
    "versionPremium": 900,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 80,
    "color": "pink",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 15,
    "type": "railway",
    "name": "HENRY M2",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    "takeCheckpoint": 25,
    "twoCheckpoint": 50,
    "threeCheckpoint": 100,
    "fourCheckpoint": 200,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 16,
    "type": "property",
    "name": "BootStrap",
    "versionAlpha": 14,
    "versionOne": 70,
    "versionTwo": 200,
    "versionThree": 550,
    "versionFour": 750,
    "versionPremium": 950,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 90,
    "color": "orange",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 17,
    "type": "comunal",
    
    "name": "comunal",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 18,
    "type": "property",
    "name": "Diseño UI/UX",
    "versionAlpha": 14,
    "versionOne": 70,
    "versionTwo": 200,
    "versionThree": 550,
    "versionFour": 750,
    "versionPremium": 950,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 90,
    "color": "orange",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 19,
    "type": "property",
    "name": "Express",
    "versionAlpha": 16,
    "versionOne": 80,
    "versionTwo": 220,
    "versionThree": 600,
    "versionFour": 800,
    "versionPremium": 1000,
    "aditional": "además V4.0",
    "commonVersion": 100,
    "premiumVersion": 100,
    "licenseValue": 100,
    "color": "orange",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 20,
    "type": "stop",
    
    "name": null,
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 21,
    "type": "property",
    "name": "Vue",
    "versionAlpha": 18,
    "versionOne": 90,
    "versionTwo": 250,
    "versionThree": 700,
    "versionFour": 875,
    "versionPremium": 1050,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 110,
    "color": "red",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 22,
    "type": "lucky",
    
    "name": "lucky",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 23,
    "type": "property",
    "name": "Angular",
    "versionAlpha": 18,
    "versionOne": 90,
    "versionTwo": 250,
    "versionThree": 700,
    "versionFour": 875,
    "versionPremium": 1050,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 110,
    "color": "red",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 24,
    "type": "property",
    "name": "Node",
    "versionAlpha": 20,
    "versionOne": 100,
    "versionTwo": 300,
    "versionThree": 750,
    "versionFour": 925,
    "versionPremium": 1100,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 120,
    "color": "red",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 25,
    "type": "railway",
    "name": "HENRY M3",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    "takeCheckpoint": 25,
    "twoCheckpoint": 50,
    "threeCheckpoint": 100,
    "fourCheckpoint": 200,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 26,
    "type": "property",
    "name": "Python",
    "versionAlpha": 22,
    "versionOne": 110,
    "versionTwo": 330,
    "versionThree": 800,
    "versionFour": 975,
    "versionPremium": 1150,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 130,
    "color": "yellow",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 27,
    "type": "property",
    "name": "Java",
    "versionAlpha": 22,
    "versionOne": 110,
    "versionTwo": 330,
    "versionThree": 800,
    "versionFour": 975,
    "versionPremium": 1150,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 130,
    "color": "yellow",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 28,
    "type": "service",
    "name": "INTERNET COMPANY",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    "licenseValue": 75,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 29,
    "type": "property",
    "name": "JavaScript",
    "versionAlpha": 22,
    "versionOne": 110,
    "versionTwo": 330,
    "versionThree": 800,
    "versionFour": 975,
    "versionPremium": 1150,
    "aditional": "además V4.0",
    "commonVersion": 150,
    "premiumVersion": 150,
    "licenseValue": 130,
    "color": "yellow",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 30,
    "type": "goJail",
    
    "name": null,
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 31,
    "type": "property",
    "name": "Sequelize",
    "versionAlpha": 26,
    "versionOne": 130,
    "versionTwo": 390,
    "versionThree": 900,
    "versionFour": 1100,
    "versionPremium": 1275,
    "aditional": "además V4.0",
    "commonVersion": 200,
    "premiumVersion": 200,
    "licenseValue": 150,
    "color": "green",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 32,
    "type": "property",
    "name": "GitHub",
    "versionAlpha": 26,
    "versionOne": 130,
    "versionTwo": 390,
    "versionThree": 900,
    "versionFour": 1100,
    "versionPremium": 1275,
    "aditional": "además V4.0",
    "commonVersion": 200,
    "premiumVersion": 200,
    "licenseValue": 150,
    "color": "green",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 33,
    "type": "comunal",
    
    "name": "comunal",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 34,
    "type": "property",
    "name": "Git",
    "versionAlpha": 28,
    "versionOne": 150,
    "versionTwo": 450,
    "versionThree": 1000,
    "versionFour": 1200,
    "versionPremium": 1400,
    "aditional": "además V4.0",
    "commonVersion": 200,
    "premiumVersion": 200,
    "licenseValue": 160,
    "color": "green",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 35,
    "type": "railway",
    "name": "HENRY M4",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    "takeCheckpoint": 25,
    "twoCheckpoint": 50,
    "threeCheckpoint": 100,
    "fourCheckpoint": 200,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 36,
    "type": "lucky",
    
    "name": "lucky",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 37,
    "type": "property",
    "name": "Redux",
    "versionAlpha": 35,
    "versionOne": 175,
    "versionTwo": 500,
    "versionThree": 1100,
    "versionFour": 1300,
    "versionPremium": 1500,
    "aditional": "además V4.0",
    "commonVersion": 200,
    "premiumVersion": 200,
    "licenseValue": 175,
    "color": "blue",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 38,
    "type": "taxVip",
    
    "name": "tax-VIP",
    
    "versionAlpha": null,
    
    "versionOne": null,
    
    "versionTwo": null,
    
    "versionThree": null,
    
    "versionFour": null,
    
    "versionPremium": null,
    
    "aditional": null,
    
    "commonVersion": null,
    
    "premiumVersion": null,
    
    "licenseValue": null,
    
    "color": null,
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    
    {
    "id": 39,
    "type": "property",
    "name": "React",
    "versionAlpha": 50,
    "versionOne": 200,
    "versionTwo": 600,
    "versionThree": 1400,
    "versionFour": 1700,
    "versionPremium": 2000,
    "aditional": "además V4.0",
    "commonVersion": 200,
    "premiumVersion": 200,
    "licenseValue": 200,
    "color": "blue",
    
    "takeCheckpoint": null,
    
    "twoCheckpoint": null,
    
    "threeCheckpoint": null,
    
    "fourCheckpoint": null,
    
    "numberBox": null,
    
    "tableMasterID": null
    },
    {
      "id": 40,
      "type": "start",
      
      "name": "start",
      
      "versionAlpha": null,
      
      "versionOne": null,
      
      "versionTwo": null,
      
      "versionThree": null,
      
      "versionFour": null,
      
      "versionPremium": null,
      
      "aditional": null,
      
      "commonVersion": null,
      
      "premiumVersion": null,
      
      "licenseValue": null,
      
      "color": null,
      
      "takeCheckpoint": null,
      
      "twoCheckpoint": null,
      
      "threeCheckpoint": null,
      
      "fourCheckpoint": null,
      
      "numberBox": null,
      
      "tableMasterID": null
      },
    ],
  }

  if (cards) {
    return (
      <div className="square">
        <div className="table">
          <div className="box-row responsive">
          {console.log('cardss',cards)}
            <div className="square2"><span className="corner corner1">FREE <br /> PARKING</span>
            <Card data={cards.table[20]} grade="180" icons={<FaVuejs className='card-icon'/>} />
            </div>
            <Card data={cards.table[21]} grade="180" icons={<FaVuejs className='card-icon' />} />
            <CardLucky data={cards.table[22]} grade="180" icons={<FaQuestion className='card-icon' />} />
            <Card data={cards.table[23]} grade="180" icons={<FaAngular className='card-icon' />} />
            <Card data={cards.table[24]} grade="180" icons={<FaNode className='card-icon' />} />
            <CardRail data={cards.table[25]} grade="180" icons={<FaTrain className='card-icon' />} />
            <Card data={cards.table[26]} grade="180" icons={<FaPython className='card-icon' />} />
            <Card data={cards.table[27]} grade="180" icons={<DiJava className='card-icon' />} />
            <CardTaxes data={cards.table[28]} grade="180" icons={<FcWiFiLogo className='card-icon' />} />
            <Card data={cards.table[29]} grade="180" icons={<SiJavascript className='card-icon' />} />
            <div className="square2"><span className="corner corner2">GO TO<br />JAIL</span></div>
            <Card data={cards.table[30]} grade="180" icons={<SiCss3 className='card-icon' />} />
            </div>
          <div className="box-row">
            <div className="box-column">
              <Card data={cards.table[19]} grade="90" icons={<SiCss3 className='card-icon' />} />
              <Card data={cards.table[18]} grade="90" icons={<SiCss3 className='card-icon' />} />
              <CardComunal data={cards.table[17]} grade="90" icons={<GiLockedChest className='card-icon' />} />
              <Card data={cards.table[16]} grade="90" icons={<BsFillBootstrapFill className='card-icon' />} />
              <CardRail data={cards.table[15]} grade="90" icons={<FaTrain className='card-icon' />} />
              <Card data={cards.table[14]} grade="90" icons={<BsFillBootstrapFill className='card-icon' />} />
              <Card data={cards.table[13]} grade="90" icons={<SiCss3 className='card-icon' />} />
              <CardTaxes data={cards.table[12]} grade="90" icons={<FcIdea className='card-icon' />} />
              <Card data={cards.table[11]} grade="90" icons={<SiCss3 className='card-icon' />} />
            </div>
            <div className="max-table">
            <div className="card-box card-blue">
                <div className="card-blue-inside">{<GiLockedChest  className='card-icon'/>}</div>
              </div>
              <img className='board-logo' src={Logo}/>
              <div className="card-box card-orange">
                <div className="card-orange-inside">{<FaQuestion className='card-icon' />}</div>						
              </div>
            </div>
            <div className="box-column">
              <Card data={cards.table[31]} grade="270" icons={<SiCss3 className='card-icon' />} />
              <Card data={cards.table[32]} grade="270" icons={<SiGithub className='card-icon' />} />
              <CardComunal data={cards.table[33]} grade="270" icons={<GiLockedChest className='card-icon' />} />
              <Card data={cards.table[34]} grade="270" icons={<FaGitSquare className='card-icon' />} />
              <CardRail data={cards.table[35]} grade="270" icons={<FaTrain className='card-icon' />} />
              <CardLucky data={cards.table[36]} grade="270" icons={<FaQuestion className='card-icon' />} />
              <Card data={cards.table[37]} grade="270" icons={<SiRedux className='card-icon' />} />
              <CardTaxes data={cards.table[38]} grade="270" icons={<FaMoneyBillAlt className='card-icon' />} />
              <Card data={cards.table[39]} grade="270" icons={<DiReact className='card-icon' />} />
            </div>
          </div>
          <div className="box-row">
            <div className="square2"><span className="corner corner3">IN <br />JAIL</span>
            <Card data={cards.table[10]} grade="0" icons={<SiCss3 className='card-icon' />} />
            </div>
            <Card data={cards.table[9]} grade="0" icons={<SiMysql className='card-icon' />} />
            <Card data={cards.table[8]} grade="0" icons={<DiSqllite className='card-icon' />} />
            <CardLucky data={cards.table[7]} grade="0" icons={<FaQuestion className='card-icon' />} />
            <Card data={cards.table[6]} grade="0" icons={<SiPostgresql  className='card-icon'/>} />
            <CardRail data={cards.table[5]} grade="0" icons={<FaTrain className='card-icon'/>} />
            <CardTaxes data={cards.table[4]} grade="0" icons={<FaMoneyBillAlt  className='card-icon'/>} />
            <Card data={cards.table[3]} grade="0" icons={<DiHtml5  className='card-icon'/>} />
            <CardComunal data={cards.table[2]} grade="0" icons={<GiLockedChest  className='card-icon'/>} />
            <Card data={cards.table[1]} grade="0" icons={<SiCss3  className='card-icon'/>} />
            <Card data={cards.table[0]} grade="0" icons={<FaReact  className='card-icon'/>} />
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className="top">
        <h1>no data</h1>
      </div>
    )
  }
};
export default Board;

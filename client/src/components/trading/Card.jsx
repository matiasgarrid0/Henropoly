import React from "react";
import "./Trading.css";
import Express from "./../board/img/express.png";
import Cplus from "./../board/img/c-plus.png";
import Csharp from "./../board/img/c-sharp.png";
import Cicon from "./../board/img/c.png";
import Ui from "./../board/img/ui.png";
import Sequelize from "./../board/img/sequelize.png";
import {
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiGithub,
  SiRedux,
} from "react-icons/si";
import { DiSqllite, DiJava, DiReact, DiHtml5 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  FaVuejs,
  FaAngular,
  FaNode,
  FaPython,
  FaGitSquare,
} from "react-icons/fa";

const Card = ({ data }) => {
  const selectoIcon = (icon) => {
    switch (icon) {
      case " CSS":
        return <SiCss3 className="trading-card-icon" />;
      case "HTML":
        return <DiHtml5 className="trading-card-icon" />;
      case "Postgres":
        return <SiPostgresql className="trading-card-icon" />;
      case "SQLITE":
        return <DiSqllite className="trading-card-icon" />;
      case "MySQL":
        return <SiMysql className="trading-card-icon" />;
      case "C#":
        return (
          <img src={Csharp} className="trading-card-icon-img" alt="img" />
        );
      case "C++":
        return <img src={Cplus} className="trading-card-icon-img" alt="img" />;
      case "C":
        return (
          <img src={Cicon} className="trading-card-icon-img" alt="img" />
        );
      case "BootStrap":
        return <BsFillBootstrapFill className="trading-card-icon" />;
      case "Diseño UI/UX":
        return <img src={Ui} className="trading-card-icon-img" alt="img" />;
      case "Express":
        return (
          <img src={Express} className="trading-card-icon-img" alt="img" />
        );
      case "Vue":
        return <FaVuejs className="trading-card-icon" />;
      case "Angular":
        return <FaAngular className="trading-card-icon" />;
      case "Node":
        return <FaNode className="trading-card-icon" />;
      case "Python":
        return <FaPython className="trading-card-icon" />;
      case "Java":
        return <DiJava className="trading-card-icon" />;
      case "JavaScript":
        return <SiJavascript className="trading-card-icon" />;
      case "Sequelize":
        return (
          <img
            src={Sequelize}
            className="trading-card-icon-img"
            alt="img"
          />
        );
      case "GitHub":
        return <SiGithub className="trading-card-icon" />;
      case "Git":
        return <FaGitSquare className="trading-card-icon" />;
      case "Redux":
        return <SiRedux className="trading-card-icon" />;
      default:
        return <DiReact className="trading-card-icon" />;
    }
  };
  if (data) {
    return (
      <div className="trading-card box-column no-select">
        <div className={`trading-card-${data.color} trading-card-style-title`}>
          <label className="trading-card-style-title-label">{data.name}</label>
        </div>
        <div className="trading-card-contenido-icon">
          {selectoIcon(data.name)}
        </div>
        <div className="trading-card-text-two">
          <label className="trading-card-text-two-label">Nivel Actual:</label>
        </div>
        <div className="trading-card-text-three">
          <label className="trading-card-text-three-label">
            {data.actualPrice}
          </label>
        </div>
      </div>
    );
  }
  return <div className="trading-card-two"></div>;
};
export default Card;

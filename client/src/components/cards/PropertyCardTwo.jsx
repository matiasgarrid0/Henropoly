import React from "react";
import { useSelector } from "react-redux";
import "./PropertyCardTwo.css";
import Express from "./../board/img/express.png";
import Cplus from "./../board/img/c-plus.png";
import Csharp from "./../board/img/c-sharp.png";
import Cicon from "./../board/img/c.png";
import Ui from "./../board/img/ui.png";
import Sequelize from "./../board/img/sequelize.png";
import Modulos from './../board/img/modulos.png'
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
import { FcWiFiLogo,FcIdea } from "react-icons/fc";
import {
  FaVuejs,
  FaAngular,
  FaNode,
  FaPython,
  FaGitSquare,
} from "react-icons/fa";

const PropertyCard = ({ data, username, buy, henryCoin }) => {
  const { user } = useSelector((state) => state.auth);
  const selectoIcon = (icon) => {
    switch (icon) {
      case 'ELECTRICITY COMPANY':
        return <FcIdea className="card-rpoperty-icon" />;
        case 'INTERNET COMPANY':
          return <FcWiFiLogo className="card-rpoperty-icon" />;
      case 'HENRY M1':
        return <img src={Modulos} className="card-rpoperty-icon-img" alt='img'/>;
        case "HENRY M2":
        return <img src={Modulos} className="card-rpoperty-icon-img" alt='img'/>;
        case "HENRY M3":
        return <img src={Modulos} className="card-rpoperty-icon-img" alt='img'/>;
        case "HENRY M4":
        return <img src={Modulos} className="card-rpoperty-icon-img" alt='img'/>;
      case " CSS":
        return <SiCss3 className="card-rpoperty-icon" />;
      case "HTML":
        return <DiHtml5 className="card-rpoperty-icon" />;
      case "Postgres":
        return <SiPostgresql className="card-rpoperty-icon" />;
      case "SQLITE":
        return <DiSqllite className="card-rpoperty-icon" />;
      case "MySQL":
        return <SiMysql className="card-rpoperty-icon" />;
      case "C#":
        return <img src={Csharp} className="card-rpoperty-icon-img" alt="img" />;
      case "C++":
        return <img src={Cplus} className="card-rpoperty-icon-img" alt="img" />;
      case "C":
        return <img src={Cicon} className="card-rpoperty-icon-img" alt="img" />;
      case "BootStrap":
        return <BsFillBootstrapFill className="card-rpoperty-icon" />;
      case "Diseño UI/UX":
        return <img src={Ui} className="card-rpoperty-icon-img" alt="img" />;
      case "Express":
        return (
          <img src={Express} className="card-rpoperty-icon-img" alt="img" />
        );
      case "Vue":
        return <FaVuejs className="card-rpoperty-icon" />;
      case "Angular":
        return <FaAngular className="card-rpoperty-icon" />;
      case "Node":
        return <FaNode className="card-rpoperty-icon" />;
      case "Python":
        return <FaPython className="card-rpoperty-icon" />;
      case "Java":
        return <DiJava className="card-rpoperty-icon" />;
      case "JavaScript":
        return <SiJavascript className="card-rpoperty-icon" />;
      case "Sequelize":
        return (
          <img src={Sequelize} className="card-rpoperty-icon-img" alt="img" />
        );
      case "GitHub":
        return <SiGithub className="card-rpoperty-icon" />;
      case "Git":
        return <FaGitSquare className="card-rpoperty-icon" />;
      case "Redux":
        return <SiRedux className="card-rpoperty-icon" />;
      default:
        return <DiReact className="card-rpoperty-icon" />;
    }
  };

  return (
    <div className="card-rpoperty-all">
      <div className="card-rpoperty-cnt box-column">
        <div
          className={`card-rpoperty-div-title card-rpoperty-color-card-${data.color}`}
        >
          <label className="card-title-card">{data.name}</label>
        </div>
        <div className="card-rpoperty-line-card"></div>
        <div>{selectoIcon(data.name)}</div>
        <div className="alignItemsssssss">
          <div className="card-rpoperty-line-card"></div>
          <p className="pgame">
            <span className="card-rpoperty-span-bold">Valor del Alquiler:</span>
            </p>
            <p>
            <span className="card-rpoperty-span">{`${data[data.actualPrice]} HenryCoins`}</span>
          </p>
          <div className="line-card"></div>
          <p className="pgame-compra">
            <span className="card-rpoperty-span-bold">Valor de la compra:</span>
            </p>
            <p>
            <span className="card-rpoperty-span">{`${data.licenseValue} HenryCoins`}</span>
          </p>
        </div>
        {username === user.username && henryCoin >= data.licenseValue ? <button className='propertycard-button' onClick={buy}>Comprar</button> : <span>No posee fondos suficiente</span>}
      </div>
    </div>
  );
};
export default PropertyCard;

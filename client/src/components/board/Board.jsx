import React from "react";
import LogoBoard from './img/Henropoly-blanco.png'
import Cofre from './img/cofre.png'
import Lucky from './img/lucky.png'
import Express from './img/express.png'
import ToniPolice from './img/Toni_police.png'
import ToniJail from './img/toniPreso.png'
import ToniVacations from './img/Toni_vacaciones.png'
import Cplus from './img/c-plus.png'
import Csharp from './img/c-sharp.png'
import Cicon from './img/c.png'
import Ui from './img/ui.png'
import Modulos from './img/modulos.png'
import Sequelize from './img/sequelize.png'
import "./board.css";
import Card from "./Card";
import CardComunal from "./CardComunal";
import CardLucky from "./CardLucky"
import CardRail from "./CardRail"
import CardTaxes from "./CardTaxes"
import { GiLockedChest } from "react-icons/gi";
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
  FaMoneyBillAlt
} from "react-icons/fa";

const Board = ({cards}) => {
 
  if (cards) {
    return (
      <div className="square">
      <div className="table">
        <div className="box-row responsive">
          <div className="square2"><span className="corner corner1"><img className='board-logo-toniVacations' src={ToniVacations} alt='img'/></span>
          <Card data={cards[20]} grade="180" icons={<img className='board-logo-toniJail' src={ToniJail} alt='img'/>} />
          </div>
          <Card data={cards[21]} grade="180" icons={<FaVuejs className='card-icon' />} />
          <CardLucky data={cards[22]} grade="180" icons={<FaQuestion className='card-icon' />} />
          <Card data={cards[23]} grade="180" icons={<FaAngular className='card-icon' />} />
          <Card data={cards[24]} grade="180" icons={<FaNode className='card-icon' />} />
          <CardRail data={cards[25]} grade="180" icons={<img src={Modulos} className='card-icon-import-Modulos' alt='img'/>} />
          <Card data={cards[26]} grade="180" icons={<FaPython className='card-icon' />} />
          <Card data={cards[27]} grade="180" icons={<DiJava className='card-icon' />} />
          <CardTaxes data={cards[28]} grade="180" icons={<FcWiFiLogo className='card-icon' />} />
          <Card data={cards[29]} grade="180" icons={<SiJavascript className='card-icon' />} />
          <div className="square2"><span className="corner corner2"><img className='board-logo-toniPolice' src={ToniPolice} alt='img'/></span></div>
          <Card data={cards[30]} grade="180" icons={<SiCss3 className='card-icon' />} />
          </div>
        <div className="box-row">
          <div className="box-column">
            <Card data={cards[19]} grade="90" icons={<img src={Express} className='card-icon-import-express' alt='img'/>} />
            <Card data={cards[18]} grade="90" icons={<img src={Ui} className='card-icon-import-Ui' alt='img'/>} />
            <CardComunal data={cards[17]} grade="90" icons={<GiLockedChest className='card-icon' />} />
            <Card data={cards[16]} grade="90" icons={<BsFillBootstrapFill className='card-icon' />} />
            <CardRail data={cards[15]} grade="90" icons={<img src={Modulos} className='card-icon-import-Modulos' alt='img'/>} />
            <Card data={cards[14]} grade="90" icons={<img src={Cicon} className='card-icon-import-Csharp' alt='img'/>} />
            <Card data={cards[13]} grade="90" icons={<img src={Cplus} className='card-icon-import-Cplus' alt='img'/>} />
            <CardTaxes data={cards[12]} grade="90" icons={<FcIdea className='card-icon' />} />
            <Card data={cards[11]} grade="90" icons={<img src={Csharp} className='card-icon-import-Csharp' alt='img'/>} />
          </div>
          <div className="max-table">
          <div className="card-box card-blue">
              <img className="card-blue-inside" src={Cofre} alt='img'/>
          </div>
            <img className='board-logo' src={LogoBoard} alt='img'/>
            <div className="card-box card-orange" >
              <img className="card-orange-inside" src={Lucky} alt='img'/>						
            </div>
          </div>
          <div className="box-column">
            <Card data={cards[31]} grade="270" icons={<img src={Sequelize} className='card-icon-import-Sequelize' alt='img'/>} />
            <Card data={cards[32]} grade="270" icons={<SiGithub className='card-icon' />} />
            <CardComunal data={cards[33]} grade="270" icons={<GiLockedChest className='card-icon' />} />
            <Card data={cards[34]} grade="270" icons={<FaGitSquare className='card-icon' />} />
            <CardRail data={cards[35]} grade="270" icons={<img src={Modulos} className='card-icon-import-Modulos' alt='img'/>} />
            <CardLucky data={cards[36]} grade="270" icons={<FaQuestion className='card-icon' />} />
            <Card data={cards[37]} grade="270" icons={<SiRedux className='card-icon' />} />
            <CardTaxes data={cards[38]} grade="270" icons={<FaMoneyBillAlt className='card-icon' />} />
            <Card data={cards[39]} grade="270" icons={<DiReact className='card-icon' />} />
          </div>
        </div>
        <div className="box-row">
          <div className="square2"><span className="corner corner3"><img className='board-logo-toniJail' src={ToniJail} alt='img'/></span>
          <Card data={cards[10]} grade="0" icons={<SiCss3 className='card-icon' />} />
          </div>
          <Card data={cards[9]} grade="0" icons={<SiMysql className='card-icon' />} />
          <Card data={cards[8]} grade="0" icons={<DiSqllite className='card-icon' />} />
          <CardLucky data={cards[7]} grade="0" icons={<FaQuestion className='card-icon' />} />
          <Card data={cards[6]} grade="0" icons={<SiPostgresql  className='card-icon'/>} />
          <CardRail data={cards[5]} grade="0" icons={<img src={Modulos} className='card-icon-import-Modulos' alt='img'/>} />
          <CardTaxes data={cards[4]} grade="0" icons={<FaMoneyBillAlt  className='card-icon'/>} />
          <Card data={cards[3]} grade="0" icons={<DiHtml5  className='card-icon'/>} />
          <CardComunal data={cards[2]} grade="0" icons={<GiLockedChest  className='card-icon'/>} />
          <Card data={cards[1]} grade="0" icons={<SiCss3  className='card-icon'/>} />
          <Card data={cards[0]} grade="0" icons={<FaReact  className='card-icon'/>} />
        </div>
      </div>
    </div>
    );
  } else {
    return(
      <div className="top">
        <h1>{console.log('no-data')}</h1>
      </div>
    )
  }
};
export default Board;

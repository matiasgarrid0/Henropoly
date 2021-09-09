import React, { useState, useEffect }  from "react";
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
import {useDispatch, useSelector} from 'react-redux';

import {getInfoDb} from '../../redux/actions'


const Board = () => {
 
  const dispatch = useDispatch();
  const cards = useSelector(state => state.reducerInfo.info)
  
  useEffect(() => {
    dispatch(getInfoDb());
  }, [dispatch]);

  if (cards) {
    return (
      <div className="table">
        <div className="box-row">
          <Card data={cards.table[20]} grade="180" icons={<FaVuejs className='card-icon'/>} />
          <Card data={cards.table[21]} grade="180" icons={<FaVuejs className='card-icon' />} />
          <Card data={cards[22]} grade="180" icons={<FaVuejs className='card-icon' />} />
          <Card data={cards[23]} grade="180" icons={<FaAngular className='card-icon' />} />
          <Card data={cards[24]} grade="180" icons={<FaNode className='card-icon' />} />
          <Card data={cards[25]} grade="180" icons={<SiCss3 className='card-icon' />} />
          <Card data={cards[26]} grade="180" icons={<FaPython className='card-icon' />} />
          <Card data={cards[27]} grade="180" icons={<DiJava className='card-icon' />} />
          <Card data={cards[28]} grade="180" icons={<SiJavascript className='card-icon' />} />
          <Card data={cards[29]} grade="180" icons={<SiJavascript className='card-icon' />} />
          <Card data={cards[30]} grade="180" icons={<SiCss3 className='card-icon' />} />
        </div>
        <div className="box-row">
          <div className="box-column">
            <Card data={cards[19]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[18]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[17]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[16]} grade="90" icons={<BsFillBootstrapFill className='card-icon' />} />
            <Card data={cards[15]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[14]} grade="90" icons={<BsFillBootstrapFill className='card-icon' />} />
            <Card data={cards[13]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[12]} grade="90" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[11]} grade="90" icons={<SiCss3 className='card-icon' />} />
          </div>
          <div className="max-table"></div>
          <div className="box-column">
            <Card data={cards[31]} grade="270" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[32]} grade="270" icons={<SiGithub className='card-icon' />} />
            <Card data={cards[33]} grade="270" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[34]} grade="270" icons={<FaGitSquare className='card-icon' />} />
            <Card data={cards[35]} grade="270" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[36]} grade="270" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[37]} grade="270" icons={<SiRedux className='card-icon' />} />
            <Card data={cards[38]} grade="270" icons={<SiCss3 className='card-icon' />} />
            <Card data={cards[39]} grade="270" icons={<SiCss3 className='card-icon' />} />
          </div>
        </div>
        <div className="box-row">
          <Card data={cards[10]} grade="0" icons={<SiCss3 className='card-icon' />} />
          <Card data={cards[9]} grade="0" icons={<SiMysql className='card-icon' />} />
          <Card data={cards[8]} grade="0" icons={<DiSqllite className='card-icon' />} />
          <Card data={cards[7]} grade="0" icons={<SiCss3 className='card-icon' />} />
          <Card data={cards[6]} grade="0" icons={<SiPostgresql  className='card-icon'/>} />
          <Card data={cards[5]} grade="0" icons={<SiCss3  className='card-icon'/>} />
          <Card data={cards[4]} grade="0" icons={<SiCss3  className='card-icon'/>} />
          <Card data={cards[3]} grade="0" icons={<SiCss3  className='card-icon'/>} />
          <Card data={cards[2]} grade="0" icons={<AiFillHtml5  className='card-icon'/>} />
          <Card data={cards[1]} grade="0" icons={<SiCss3  className='card-icon'/>} />
          <Card data={cards[0]} grade="0" icons={<FaReact  className='card-icon'/>} />
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

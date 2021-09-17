import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineCaretUp } from "react-icons/ai";
import { GiSoundOff, GiSoundOn} from "react-icons/gi";
import "./MenuDesplegable.css";

const MenuDesplegable = ({ endGame, host }) => {
  const [menu, setMenu] = useState(false);

if(!menu){
    return (
        <div className='menuDesplegable-div-hide'>
            <button className='menuDesplegable-btn-hide' onClick={()=>{setMenu(true)}}><span className='menuDesplegable-span-hide'>MENÚ</span>{<AiOutlineMenu className='menuDesplegable-menu-icon-hide' />}</button>
        </div>
      );
}else{
    return (
        <div className='menuDesplegable-menu-show'>
            <button className='menuDesplegable-btn-show' onClick={()=>{setMenu(false)}}>{<AiOutlineCaretUp className='menuDesplegable-chat-icon-show' />}</button>
            <button className='menuDesplegable-btn-salir' onClick={endGame}>{host? 'Terminar partida':'Salir del juego'}</button>
            <button className='menuDesplegable-btn-sound'>{<GiSoundOff className='menuDesplegable-icon-sound-show' />}</button>
        </div>
      );
}
  
};

export default MenuDesplegable;

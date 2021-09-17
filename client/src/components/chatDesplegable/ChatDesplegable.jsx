import React, { useState } from "react";
import { Chat } from "..";
import { BsFillChatSquareDotsFill, BsXSquare } from "react-icons/bs";


import './ChatDesplegable.css';
const ChatDesplegable = () => {
    const [menu, setMenu] = useState(false);
    if(!menu){
    return ( 
        <div className='chatDesplegable-show'>
            <button className='chatDesplegable-btn-hide-v' onClick={()=>{setMenu(true)}}><span className='chatDesplegable-span'></span>{<BsFillChatSquareDotsFill className='menuDesplegable-chat-icon-show' />}</button>
        </div> 
    );
    }else{
    return(
      <div className='chatDesplegable-totop'>
        <button className='' onClick={()=>{setMenu(false)}}>{<BsXSquare className='menuDesplegable-chat-icon-show' />}</button>    
        <Chat />
      </div>
    )
    }
  };
  
  export default ChatDesplegable;
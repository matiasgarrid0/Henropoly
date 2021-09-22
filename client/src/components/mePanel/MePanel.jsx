import React, { useState } from "react";
import "./MePanel.css";
import { FiMinimize2 } from "react-icons/fi";
import { GiCardDraw } from "react-icons/gi";
import { useSelector } from "react-redux";
import Card from './../trading/Card.jsx'
const MePanel = () => {
  const { table } = useSelector((state) => state.henropolyGame);
  const { user } = useSelector((state) => state.auth);
  const [minimizar, setMinimizar] = useState(true);
  let myCards = table.filter((card) => card.owner === user.username);

  if (myCards.length === 0) {
    return <></>;
  }
  if (minimizar) {
    return (
      <button
        className="mepanel-btn"
        onClick={() => {
          setMinimizar(false);
        }}
      >
        <GiCardDraw className="mepanel-icon" />
      </button>
    );
  }

  return (
    <div className="mepanel-div-minor">
      <div className="mepanel-div-btn-icon">
        <div className="mepanel-iconthree">
          <FiMinimize2
            className="mepanel-icontwo"
            onClick={() => {
              setMinimizar(true);
            }}
          />
        </div>
      </div>
      <div className={myCards.length >= 5 ?'mepanel-tablero':'mepanel-tablero-two'}>
        {myCards.map((card) => {
          return <div className='mepanel-card'><Card data={card}/></div>;
        })}
      </div>
    </div>
  );
};

export default MePanel;

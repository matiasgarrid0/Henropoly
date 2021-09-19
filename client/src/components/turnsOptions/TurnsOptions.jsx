import React from "react";
import "./TurnsOptions.css";
import { FaDice } from "react-icons/fa";
import { GiPlayerNext, GiTrade } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { statusTrading } from './../../redux/actions'
const TurnsOptions = ({ turn, roll, pass }) => {
  // const dispatch = useDispatch();
  const { move, table } = useSelector((state) => state.henropolyGame);
  // const { user } = useSelector((state) => state.auth);
  // const tradeEnabled =table.filter( card=> card.owner === user.username )
  // const comercio =()=>{
  //   dispatch(statusTrading(true))
  // }
  return (
    <div className="turnsoptions-div-minor box-row">
      <button
        className={
          turn && move ? "turnsoptions-btn" : "turnsoptions-btn-disabled"
        }
        onClick={turn && move && roll}
      >
        <FaDice className="turnsoptions-icon" />
        {turn && move && <div className="turnsoptions-label">
              <label>dados</label>
        </div>}
      </button>
      <button
        className={turn ? "turnsoptions-btn" : "turnsoptions-btn-disabled"}
        onClick={turn && pass}
      >
        <GiPlayerNext className="turnsoptions-icon" />
        {turn &&<div className="turnsoptions-label">
              <label>Pasar</label>
        </div>}
      </button>
      {/* <button
        className={turn && tradeEnabled.length !== 0 ? "turnsoptions-btn" : "turnsoptions-btn-disabled"}
        onClick={turn && tradeEnabled.length !== 0 && comercio }>
        <GiTrade className="turnsoptions-icon" />
        {turn && tradeEnabled.length !== 0 &&<div className="turnsoptions-label">
              <label>Comercio</label>
        </div>}
      </button> */}
    </div>
  );
};

export default TurnsOptions;

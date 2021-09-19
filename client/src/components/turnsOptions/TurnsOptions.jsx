import React from "react";
import "./TurnsOptions.css";
import { FaDice } from "react-icons/fa";
import { GiPlayerNext, GiTrade } from "react-icons/gi";
import { statusTrading } from "./../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const TurnsOptions = ({ turn, roll, pass }) => {
  const dispatch = useDispatch();
  const { move, table } = useSelector((state) => state.henropolyGame);
  const { tradeStatus } = useSelector((state) => state.henryTrading);
  const { user } = useSelector((state) => state.auth);
  const comerciar = () => {
    dispatch(statusTrading('selector'));
  };
  return (
    <div className="turnsoptions-div-minor box-row">
      <button
        className={
          turn && move ? "turnsoptions-btn" : "turnsoptions-btn-disabled"
        }
        onClick={turn && move && roll}
      >
        <FaDice className="turnsoptions-icon" />
        {turn && move && (
          <div className="turnsoptions-label">
            <label>dados</label>
          </div>
        )}
      </button>
      <button
        className={turn ? "turnsoptions-btn" : "turnsoptions-btn-disabled"}
        onClick={turn && pass}
      >
        <GiPlayerNext className="turnsoptions-icon" />
        {turn && (
          <div className="turnsoptions-label">
            <label>Pasar</label>
          </div>
        )}
      </button>
      <div>
        <button
          className={turn && tradeStatus === null && table.filter(card => card.owner === user.username).length !== 0 ? "turnsoptions-btn" : "turnsoptions-btn-disabled"}
          onClick={turn && tradeStatus === null && table.filter(card => card.owner === user.username).length !== 0 && comerciar}
        >
          <GiTrade className="turnsoptions-icon" />
          {turn && tradeStatus === null && table.filter(card => card.owner === user.username).length !== 0 && (
            <div className="turnsoptions-label">
              <label>Comercio</label>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default TurnsOptions;

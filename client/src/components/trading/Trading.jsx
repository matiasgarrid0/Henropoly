import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusTrading } from "./../../redux/actions";
import "./Trading.css";

const Trading = ({ close }) => {
  const { dataPlayers, host, actualTurn, table } = useSelector(
    (state) => state.henropolyGame
  );
  const { socket, user } = useSelector((state) => state.auth);
  const { tradeStatus } = useSelector((state) => state.henryTrading);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on(`trading`, (data) => {});
    return () => {
      socket.off("trading");
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const openTrade = (target) => {
    return ()=>{
      dispatch(statusTrading("loading"));
    }
  };
  if (tradeStatus === "selector") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-select">
          {dataPlayers["target1"].status &&
            dataPlayers["target1"].username !== user.username && (
              <div
                className="trading-table-box box-column"
                onClick={openTrade("target1")}
              >
                <label className="trading-title">Player1:</label>
                <label className="trading-target1">
                  {dataPlayers.target1.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target1.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target1.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target2"].status &&
            dataPlayers["target2"].username !== user.username && (
              <div className="trading-table-box box-column">
                <label className="trading-title">Player2:</label>
                <label className="trading-target2">
                  {dataPlayers.target2.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target2.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target2.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target3"].status &&
            dataPlayers["target3"].username !== user.username && (
              <div className="trading-table-box box-column">
                <label className="trading-title">Player3:</label>
                <label className="trading-target3">
                  {dataPlayers.target3.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target3.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target3.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target4"].status &&
            dataPlayers["target4"].username !== user.username && (
              <div className="trading-table-box box-column">
                <label className="trading-title">Player4:</label>
                <label className="trading-target4">
                  {dataPlayers.target4.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target4.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target4.username
                    ).length
                  }
                </label>
              </div>
            )}
        </div>
      </div>
    );
  } else if (tradeStatus === "loading") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-select">
          cargando
        </div>
      </div>
    );
  }

  return <></>;
};
export default Trading;

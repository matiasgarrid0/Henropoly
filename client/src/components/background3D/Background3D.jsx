import React from "react";
import { useSelector } from "react-redux";
import "./Background3d.css";
import { Board } from "./../";
import { boardData } from "./../board/data";
const Background3d = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      {!isAuth && window.location.pathname === "/" && (
        <div className='background3d-body'>
          <div className='background3d-contenedor'>
            <div className="body-display no-select">
              <div className="container-gametable">
                <div className="container-gametable-cube">
                  <div className="style-3d">
                    <div className="align-game">
                      <Board cards={boardData.table} />
                      <div className="game-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Background3d;

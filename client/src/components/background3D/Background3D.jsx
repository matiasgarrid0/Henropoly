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
        <div className='modul3d-background3d-body'>
          <div className='modul3d-background3d-contenedor'>
            <div className="modul3d-body-display no-select">
              <div className="modul3d-container-gametable">
                <div className="modul3d-container-gametable-cube">
                  <div className="modul3d-style-3d">
                    <div className="modul3d-align-game">
                      <Board cards={boardData.table} />
                      <div className="modul3d-game-box"></div>
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

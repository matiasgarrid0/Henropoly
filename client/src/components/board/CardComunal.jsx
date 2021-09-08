import React from "react";
import "./board.css";
const CardEmpty = ({ data, grade, icons }) => {
    if (data) {
      return (
        <div
          id={`card${data.id}`}
          className={`container-card${
            data.type === "exit"
              ? "-cube"
              : data.type === "jail"
              ? "-cube"
              : data.type === "stop"
              ? "-cube"
              : data.type === "goJail"
              ? "-cube"
              : ""
          } grade${grade}`}
        >
          {data.type === "comunal" && (
            <>
             <div className='div-title-empty color-card'>
              <label className="title-card">{data.name}</label>
            </div>
              <div className="box-column"></div>
              <div>{icons}</div>
            </>
          )}
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  export default CardEmpty;

import React from "react";
import "./board.css";
const Card = ({ data, grade, icons }) => {
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
        {data.type === "property" && (
          <>
            <div className={`div-title color-card-${data.color}`}>
              <label className="board-title-card-name">{data.name}</label>
            </div>
            <div className="box-column"></div>
            <div>{icons}</div>
            <div>{data.id}</div>
          </>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Card;

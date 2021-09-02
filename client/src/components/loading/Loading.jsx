import React from "react";
import "./Loading.css";
import background from "./loading-card.png";
import logo from "./loading-card-two.png";

const Loading = () => {
  return (
    <div className="loading-body">
      <div className="loading">
        <img
          className="loading-background"
          src={background}
          alt="Magni Community"
        />
        <img className="loading-img" src={logo} alt="Magni Community" />
      </div>
    </div>
  );
};

export default Loading;

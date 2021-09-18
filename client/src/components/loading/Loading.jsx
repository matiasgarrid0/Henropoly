import React from "react";
import "./Loading.css";
import background from "./Henrycoin-loading.png";
import logo from "./LOADING.png";

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

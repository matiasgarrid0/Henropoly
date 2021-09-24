import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Winner.css";
import final from "./final.mp4";

const Winner = () => {
  var sonidos = {
    final: new Audio(final),
  };

  useEffect(() => {    
    sonidos.final.play();
  }, []);

  return (
    <div >
      <video class="tWeCl" crossorigin="anonymous" playsinline="" poster={final} preload="none" type="video/mp4" src={final} loop="" style="display: block;"></video>
    </div>
  );
};

export default Winner;
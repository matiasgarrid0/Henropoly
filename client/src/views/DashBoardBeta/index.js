import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DashBoardBeta.css";

const DashBoardBeta = () => {
  const { socket } = useSelector((state) => state.socketIO);
  useEffect(() => {
    socket.emit("activitie", 'hola');
  }, []);

  useEffect(() => {
    socket.on("activitie", () => {

    });
    return () => {
      socket.off();
    };
  }, []);
  return <div>hola</div>;
};
export default DashBoardBeta;

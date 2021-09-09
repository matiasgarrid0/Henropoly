import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerDb, changePlayer } from "../../redux/actions";
import displayPlayer from "./displayPlayer";
//import { Link, useHistory } from 'react-router-dom';
import { Loading } from "./../";

function ActionGame() {
  const dispatch = useDispatch();
  /* const [input, setInput] = useState(''); */

  useEffect(() => {
    dispatch(getPlayerDb());
  }, [dispatch]);

  const players = useSelector((state) => state.reducerInfo.players);
  console.log("ssddfsffddffgfgfgfgfgf", players);

  function handleClick(e) {
    e.preventDefault();

    dispatch(changePlayer("se movio"));

    //
  }

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {" "}
          ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </button>
        <h1>HENRYCOINS {players.henrycoin}</h1>
        <h1>PROPERTIES {players.properties}</h1>
        <h1>position {players.position}</h1>
      </div>
    </div>
  );
}

export default ActionGame;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postPlayer } from "../../redux/actions";
import s from './CreateGame.module.css';

const CreateGame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let [input, setInput] = useState({
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
  });
  // const { user } = useSelector((state) => state.auth);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const send = {
      ID: "1",
      players: [
        { ID: "1", username: input.playerOne },
        { ID: "2", username: input.playerTwo },
        { ID: "3", username: input.playerThree },
        { ID: "4", username: input.playerFour },
      ],
    };
    dispatch(postPlayer(send));
    history.push("/game");
  }

  return (
    <div>
      <div className={s.divchiquito}>
        <h3>Ingresar nombre de jugadores</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={s.nombres}>Jugador 1</label>
          <input
            type="text"
            name="playerOne"
            value={input.playerOne}
            onChange={(e) => handleChange(e)}
            placeholder="name player"
          />
          <label className={s.nombres}>Jugador 2</label>
          <input
            type="text"
            name="playerTwo"
            value={input.playerTwo}
            onChange={(e) => handleChange(e)}
            placeholder="name player"
          />
          <label className={s.nombres}>Jugador 3</label>
          <input
            type="text"
            name="playerThree"
            value={input.playerThree}
            onChange={(e) => handleChange(e)}
            placeholder="name player"
          />
          <label className={s.nombres}>Jugador 4</label>
          <input
            type="text"
            name="playerFour"
            value={input.playerFour}
            onChange={(e) => handleChange(e)}
            placeholder="name player"
          />
          <button type="submit">Enviar </button>
        </form>
      </div>
    </div>
  );
};
export default CreateGame;

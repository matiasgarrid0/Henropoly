import React, { useEffect, useRef } from "react";
import "./Dice.css";

function Dices({ rollOne, rollTwo, username }) {
  const diceOne = useRef()
  const diceTwo = useRef()

  useEffect(() => {
    rollDice()
  }, [])
  
  function rollDice() {
      diceOne.current.style.transition = '';
      diceOne.current.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      diceTwo.current.style.transition = '';
      diceTwo.current.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

      setTimeout(() => {
          let randomNumberDiceOne = rollOne
          let randomNumberDiceTwo = rollTwo

          switch (randomNumberDiceOne) {
              case 1:
                  diceOne.current.style.transform = ` rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 2:
                  diceOne.current.style.transform = ` rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 3:
                  diceOne.current.style.transform = ` rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                  break;
              case 4:
                  diceOne.current.style.transform = ` rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                  break;
              case 5:
                  diceOne.current.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 6:
                  diceOne.current.style.transform = ` rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                  break;
          };
          switch (randomNumberDiceTwo) {
              case 1:
                  diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 2:
                  diceTwo.current.style.transform = ` rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 3:
                  diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                  break;
              case 4:
                  diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                  break;
              case 5:
                  diceTwo.current.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                  break;
              case 6:
                  diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                  break;
          };
      },40);
  }

  return (
    <div className="contenedor">
      {/* <span> Dados {username} </span> */}
      <div ref={diceOne} className="cube">
        <div className="cube-face front">
          <div className="inside">
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face back">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face left">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face right">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face top">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face bottom">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <div ref={diceTwo} className="cube">
        <div className="cube-face front">
          <div className="inside">
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face back">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face left">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face right">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face top">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face bottom">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dices;


/**
 * import React, { useRef , useState} from 'react';
import './App.css';


function App() {

    const diceOne = useRef()
    const diceTwo = useRef()

    const [number,setNumber] = useState(null)
    
    function rollDice() {
        const time = 1
        diceOne.current.style.transition = '';
        diceOne.current.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        diceTwo.current.style.transition = '';
        diceTwo.current.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

        setTimeout(() => {
            diceOne.current.style.transition = `transform ${time}s`;
            diceTwo.current.style.transition = `transform ${time}s`;
            let randomNumberDiceOne = Math.floor((Math.random() * 6) + 1);
            let randomNumberDiceTwo = Math.floor((Math.random() * 6) + 1);

            console.log(randomNumberDiceOne,randomNumberDiceTwo)
            setNumber(randomNumberDiceOne+randomNumberDiceTwo)
            

            // number = randomNumberDiceOne + randomNumberDiceTwo

            switch (randomNumberDiceOne) {
                case 1:
                    diceOne.current.style.transform = ` rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 2:
                    diceOne.current.style.transform = ` rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 3:
                    diceOne.current.style.transform = ` rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                    break;
                case 4:
                    diceOne.current.style.transform = ` rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                    break;
                case 5:
                    diceOne.current.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 6:
                    diceOne.current.style.transform = ` rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                    break;
            };
            switch (randomNumberDiceTwo) {
                case 1:
                    diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 2:
                    diceTwo.current.style.transform = ` rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 3:
                    diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                    break;
                case 4:
                    diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                    break;
                case 5:
                    diceTwo.current.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                    break;
                case 6:
                    diceTwo.current.style.transform = ` rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                    break;
            };
        });
    }

    return (
        <div className="contenedor">
            <div ref={diceOne} className="cube">
                <div className="cube-face front">
                    <div className="inside">
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face back">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face left">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face right">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face top">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face bottom">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            <div ref={diceTwo} className="cube">
                <div className="cube-face front">
                    <div className="inside">
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face back">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face left">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face right">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face top">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="cube-face bottom">
                    <div className="inside">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            <span>{number}</span>
            <button className="button" onClick={rollDice}>Roll</button>
        </div>
    );
}

export default App;
 */
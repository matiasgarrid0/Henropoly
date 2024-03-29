import React, { useEffect, useState } from "react";
import "./DisplayGameBeta.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setView,
  setTargetValue,
  setTurns,
  kickPlayer,
  setGameStatus,
  setGameRoll,
  buyPropertyAction,
  setMoveTurn,
  moveToJail,
  setBalance,
  setBuyBox,
  changeValueTarget,
  statusTrading,
  updateTrade
} from "./../../redux/actions";
import {
  Board,
  Turns,
  Dices,
  Portal,
  LuckyCard,
  PropertyCard,
  RailwayCard,
  ServiceCard,
  TaxCard,
  Jail,
  GameOptions,
  ChatGame,
  TurnsOptions,
  GamingLog,
  DataPlayerInfo,
  Trading,
  MePanel,
  Alerts,
  Winner
} from "./../";

import Imagen from "./table.jpg";
import { targetX, targetY } from "./calculatorTargetPosition";
import SonidoFranco from "./shake-and-roll-dice.mp3";

const DisplayGameBeta = () => {
  const sonidoOne = new Audio(SonidoFranco);
  sonidoOne.volumen = 0.5;
  sonidoOne.loop = false;
  const dispatch = useDispatch();
  const { tradeStatus } = useSelector((state) => state.henryTrading);
  const { status, dataPlayers, host, actualTurn, table } = useSelector(
    (state) => state.henropolyGame
  );
  //random Lucky y comunal cards
  const { luckyCard, comunalCard } = useSelector((state) => state.reducerInfo);
  const { info } = useSelector((state) => state.reducerInfo);
  const { socket, user } = useSelector((state) => state.auth);
  const { view } = useSelector((state) => state.view);
  const [minimizarPlayers, setMinimizarPlayers] = useState({
    status: false,
    target: null,
  });
  const [dataGame, setDataGame] = useState({
    mouseActive: false,
    clientX: null,
    clientY: null,
    targetMove: false,
    target1: {
      box: dataPlayers.target1.box,
    },
    target2: {
      box: dataPlayers.target2.box,
    },
    target3: {
      box: dataPlayers.target3.box,
    },
    target4: {
      box: dataPlayers.target4.box,
    },
  });
  //--Dados--
  const [roll, setRoll] = useState(false);
  const [rollDicesInGame, setRollDicesInGame] = useState({
    valorOne: null,
    valorTwo: null,
    username: null,
  });
  //--portales--
  const [cardBack, setCardBack] = useState(null)
  const [dataAlert, setDataAlert] = useState(null)
  const [dataAlertPagar, setDataAlertPagar] = useState(null)
  const [ganador,setGanador] = useState(true)
  const [perdedor, setPerdedor] = useState(true)
  const [goJailLuckyCard, setGoJailLuckyCard] = useState(false);
  const [render, setRender] = useState('')
  const [portal, setPortal] = useState(null)
  const [property, setProperty] = useState(null)
  const [train, setTrain] = useState(null)
  const [service, setService] = useState(null)
  const [tax, setTax] = useState(null)
  const [jailData, setJailData] = useState(null)
  const [meBox, setMeBox] = useState({
    username: null,
    buy: null,
  });
  const moveTime = (value) => {
    return new Promise((resolve) => setTimeout(resolve, value));
  };

  const alignTarget = async (player) => {
    setDataGame({ ...dataGame, targetMove: true });
    setRoll(true);
    sonidoOne.play();
    await moveTime(800);
    var actualBox = dataGame[player].box;
    var finalBox = dataPlayers[player].box;
    while (finalBox !== actualBox) {
      let initialX = targetX(player, actualBox);
      let initialY = targetY(player, actualBox);
      actualBox++; //2
      if (actualBox === 40) actualBox = 0;
      let valueX = targetX(player, actualBox) - initialX;
      let valueY = targetY(player, actualBox) - initialY;
     dispatch(setTargetValue(player, "x", initialX + Math.floor(valueX / 5)));
      dispatch(setTargetValue(player, "y", initialY + Math.floor(valueY / 5)));
      await moveTime(50);
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 2))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 2))
      );
      await moveTime(50);
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 3))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 3))
      );
      await moveTime(50);
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 4))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 4))
      );
      await moveTime(50); 
      dispatch(setTargetValue(player, "x", initialX + valueX));
      dispatch(setTargetValue(player, "y", initialY + valueY));
      await moveTime(50);
      setDataGame({
        ...dataGame,
        [player]: {
          ...dataGame[player],
          box: actualBox,
        },
      });
    }
    setRoll(false);
    setDataGame({
      ...dataGame,
      [player]: {
        ...dataGame[player],
        box: finalBox,
      },
      targetMove: false,
    });


    //------IF PARA RENDERIZAR PORTALES------
    // if(dataAlert){
    //   setPortal("dataAlert")
    // }

    if (info.table[dataPlayers[player].box].type && dataPlayers[player].username === user.username) {
      
      if (info.table[dataPlayers[player].box].type === "comunal") {
        setPortal("comunal");
      }
      if (info.table[dataPlayers[player].box].type === "lucky") {
        if (cardBack[0].type === "migras") {
          setGoJailLuckyCard(true)
          setPortal("lucky");
          setRoll(false)
        }
        setPortal("lucky");
      }

      if (info.table[dataPlayers[player].box].type === "property") {
        
        setProperty(info.table[dataPlayers[player].box]);
        if (
          dataPlayers[player].username === user.username &&
          table[dataPlayers[player].box].owner === null
        ) {
          setMeBox({
            ...meBox,
            username: dataPlayers[player].username,
            henryCoin:dataPlayers[player].henryCoin,         
            buy: () => {
              socket.emit("TradeDashboard", { type: "buyProperty", box: dataPlayers[player].box })
              setPortal(null)
            }
          });
          setPortal("property");
        } else {
          setMeBox({ ...meBox, username: null });
        }
        
      }
      if (info.table[dataPlayers[player].box].type === "railway") {
        setTrain(info.table[dataPlayers[player].box])
        if (dataPlayers[player].username === user.username && table[dataPlayers[player].box].owner === null) {
          setMeBox({
            ...meBox,
            username: dataPlayers[player].username,
            henryCoin:dataPlayers[player].henryCoin,
            buy: () => {
              socket.emit("TradeDashboard", { type: "buyRailway", box: dataPlayers[player].box })
              setPortal(null)
            },            
          })
          setPortal("railway");
        } else {
          setMeBox({ ...meBox, username: null })
        }
        
      }
      if (info.table[dataPlayers[player].box].type === "service") {
        setService(info.table[dataPlayers[player].box])
        if (dataPlayers[player].username === user.username && table[dataPlayers[player].box].owner === null) {
          setMeBox({
            ...meBox,
            username: dataPlayers[player].username,
            henryCoin:dataPlayers[player].henryCoin,
            buy: () => {
              socket.emit("TradeDashboard", { type: "buyService", box: dataPlayers[player].box })
              setPortal(null)
            },
          })
          setPortal("service");
        } else {
          setMeBox({ ...meBox, username: null })
        }
        
      }
      if (
        info.table[dataPlayers[player].box].type === "tax" ||
        info.table[dataPlayers[player].box].type === "taxVip"
      ) {
        setTax(info.table[dataPlayers[player].box]);
        setPortal("tax");
      }
      if (info.table[dataPlayers[player].box].type === "jail") {
        setJailData(info.table[dataPlayers[player].box])
        if (dataPlayers[player].username === user.username) {
          setMeBox({
            ...meBox,
            username: dataPlayers[player].username,
            buy: () => {
              socket.emit("TradeDashboard", { type: "buyJail", box: dataPlayers[player].box })
              setPortal(null)
            },
          })
        } else {
          setMeBox({ ...meBox, username: null })
        }
        setPortal("jail");
      }
      if (info.table[dataPlayers[player].box].type === "stop") {
        setJailData(info.table[dataPlayers[player].box])
        setPortal("stop");
      }
      if (info.table[dataPlayers[player].box].type === "goJail") {
        setJailData(info.table[dataPlayers[player].box])
        setMeBox({
          ...meBox,
          username: dataPlayers[player].username
        })
        setPortal("goJail");
      }
    }
  };
  function closeAndOpen(booleans, target) {
    return () => {
      setMinimizarPlayers({
        ...minimizarPlayers,
        status: booleans,
        target: target,
      });
    };
  }
  function closedPortal() {
    if(goJailLuckyCard) {
      socket.emit("TradeDashboard", { type: "goToJailCard" })
      setRoll(false);
    setRollDicesInGame({
      valorOne: null,
      valorTwo: null,
      username: null,
    });
     setGoJailLuckyCard(false)
      dispatch(setMoveTurn(false));
      setPortal(null)
    }
    setRender(`status closed`)
    setPortal(null)
  }
  // function closedPortal4() {
  //   dispatch(changeValueTarget('target1','box', 10));
  //   setPortal(null);
  // }

  function closedPortal2() {
    socket.emit("TradeDashboard", { type: "goToJail" })
    setRoll(false);
    setRollDicesInGame({
      valorOne: null,
      valorTwo: null,
      username: null,
    });
    dispatch(setMoveTurn(false));
    setPortal(null)
  }


  function closedPortal3() {
    //setDataAlert(false)
    // if (setGoJailLuckyCard) {
    //   socket.emit("TradeDashboard", { type: "goToJailCard" })
    //   dispatch(setMoveTurn(false));
    setPortal(null)
  }
  function closedPortal4() {
    setRender(`status closed`)
    setPortal(null)
  }
  useEffect(() => {
    if (
      dataGame.target1.box !== dataPlayers.target1.box &&
      dataGame.targetMove === false
    ) alignTarget("target1");
    /**src\components\displayGameBeta\DisplayGameBeta.jsx
     Line 270:3:  Expected an assignment or function call and instead saw an expression */
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target1.box]);

  useEffect(() => {
    if (dataGame.target2.box !== dataPlayers.target2.box &&
      dataGame.targetMove === false
    ) alignTarget("target2");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target2.box]);

  useEffect(() => {
    if (
      dataGame.target3.box !== dataPlayers.target3.box &&
      dataGame.targetMove === false
    )
      alignTarget("target3");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target3.box]);

  useEffect(() => {
    if (
      dataGame.target4.box !== dataPlayers.target4.box &&
      dataGame.targetMove === false
    )
      alignTarget("target4");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target4.box]);

  const style = {
    backgroundSize: "2500px",
    backgroundImage: `url(${Imagen})`,
    boxShadow: "inset 0 0 0 20px #00000033",
    width: "1800px",
    height: "1800px",
    position: "absolute",
    transform: `scale(${view.scale}) rotateX(${view.high}deg) rotateZ(${view.angle}deg)`,
    marginLeft: `-250px`,
    marginTop: `-250px`,
  };
  const handleWheelEvent = (e) => {
    if (e.deltaY === 100 && view.scale > 0.55) {
      dispatch(setView("scale", view.scale - 0.03));
    } else if (e.deltaY === -100 && view.scale < 1.28) {
      dispatch(setView("scale", view.scale + 0.03));
    }
  };
  const handleMousedownEvent = (e) => {
    setDataGame({
      ...dataGame,
      clientX: e.clientX,
      clientY: e.clientY,
      mouseActive: true,
    });
  };
  const handleOnMouseMoveEvent = (e) => {
    if (dataGame.mouseActive) {
      if (e.clientX > dataGame.clientX + 5) {
        dispatch(setView("angle", view.angle - 1));
        setDataGame({
          ...dataGame,
          clientX: e.clientX,
        });
      } else if (e.clientX < dataGame.clientX - 5) {
        dispatch(setView("angle", view.angle + 1));
        setDataGame({
          ...dataGame,
          clientX: e.clientX,
        });
      }
      if (e.clientY > dataGame.clientY + 5 && view.high > 0) {
        dispatch(setView("high", view.high - 1));
        setDataGame({
          ...dataGame,
          clientY: e.clientY,
        });
      } else if (e.clientY < dataGame.clientY - 5 && view.high < 70) {
        dispatch(setView("high", view.high + 1));
        setDataGame({
          ...dataGame,
          clientY: e.clientY,
        });
      }
    }
  };
  const handleOnMouseUpEvent = (e) => {
    setDataGame({ ...dataGame, mouseActive: false });
  };
  useEffect(() => {
    socket.on('alert',(data)=>{
      if(data.status === 'mePagan'){
        setDataAlert(`El jugador ${data.nombreDelqueTePaga} cae en tu propiedad y te paga ${data.cuantoTePago} HenryCoins.`)
      }else if(data.status === 'lePago'){
        setDataAlertPagar(`Caes en la propiedad de ${data.nombreDelqueTePaga}, pagas ${data.cuantoTePago} HenryCoins por la estadía en ella.`)
      }
    })
    socket.on("setGame", (data) => {
      if (data.status === "setTurns") {
        dispatch(statusTrading(null));
        dispatch(setTurns({ actualTurn: data.actualTurn, order: data.order }));
        dispatch(setMoveTurn(true));
      } else if (data.status === "statusGame") {
        if (data.type === "endGame") {
          dispatch(setGameStatus("free"));
        } else if (data.type === "exitPlayer") {
          //console.log('-------> kiickplayer data,', data)
          dispatch(
            setTurns({
              actualTurn: data.info.turn.actualTurn,
              order: data.info.turn.order,
            })
          );
          dispatch(kickPlayer(data.info.target));
        } else if (data.type === "meEnd") {
          dispatch(setGameStatus("free"));
        }
      } else if (data.status === "roll") {
        if (data.move) {
          dispatch(setMoveTurn(true));
        }
        setRollDicesInGame({
          ...rollDicesInGame,
          valorOne: data.one,
          valorTwo: data.two,
          username: data.usernameRoll,
        });
        setCardBack(data.cardChoice)
        dispatch(setGameRoll(data.info));
        setRender(`status:${data.status}`)
      } else if (data.status === "buyProperty") {
        dispatch(setBalance({ target: data.newProperty, henryCoin: data.newbalase }))//refleja dinero de persona
        dispatch(setBuyBox({ box: data.box, target: data.newProperty }))//refleja el dueño
        dispatch(buyPropertyAction(data));
        setRender(`status:${data.status}`)
      } else if (data.status === "setBalance") {
        dispatch(setBalance(data.info));
        setRender(`status:${data.status}`)
        //console.log('setBalance', data.info)
      } else if (data.status === 'buyRailway') {
        dispatch(setBalance({ target: data.newProperty, henryCoin: data.newbalase }))//refleja dinero de persona
        dispatch(setBuyBox({ box: data.box, target: data.newProperty }))//refleja el dueño
        dispatch(buyPropertyAction(data))
        setRender(`status:${data.status}`)
      } else if (data.status === 'buyService') {
        dispatch(setBalance({ target: data.newProperty, henryCoin: data.newbalase }))//refleja dinero de persona
        dispatch(setBuyBox({ box: data.box, target: data.newProperty }))//refleja el dueño
        dispatch(buyPropertyAction(data))
        setRender(`status:${data.status}`)
      } else if (data.status === 'goToJail') {
        //console.log('dataStatusJail', data)
        dispatch(moveToJail(data))
      } else if (data.status === 'goToJailCard') {
        dispatch(moveToJail(data))
      } else if (data.status === 'buyJail') {
        dispatch(setBalance({ target: data.newProperty, henryCoin: data.newbalase }))//refleja dinero de persona
        dispatch(setBuyBox({ box: data.box, target: data.newProperty }))//refleja el dueño
        dispatch(buyPropertyAction(data));
      }else if (data.status ==='dadosJail'){
        if(data.fail){
          dispatch(setMoveTurn(false))
        } else {
          dispatch(setMoveTurn(true))
        }
      } else if(data.status === 'perdiste'){
       // console.log(data)
       /*  setPerdedor(true)
        setGanador(true)
        setRender(`status:${data.status}` */
        dispatch(setGameStatus('perdedor'))
      }else if(data.status === 'ganador'){
        // console.log(data)
        /*  setPerdedor(true)
         setGanador(true)
         setRender(`status:${data.status}` */
         dispatch(setGameStatus('ganador'))
       }else if (data.status === "updateTrade") {
        dispatch(updateTrade(data.data));
      }
    })
    socket.on("trading", (data) => {});

    return () => {
      socket.off('alert');
      socket.off("setGame");
      socket.off("trading");
    };
  }, []);

  return (
    <div className="display-beta-border">
      {dataAlert && (
        <Portal onClose={()=>{setDataAlert(false)}}>
          <Alerts data={dataAlert}/>
        </Portal>
      )}
      {dataAlertPagar && (
        <Portal onClose={()=>{setDataAlertPagar(false)}}>
          <Alerts data={dataAlertPagar}/>
        </Portal>
      )}
      {portal === "lucky" && (
        <Portal onClose={closedPortal}>
          <LuckyCard data={cardBack} />
        </Portal>
      )}
    {/*   {perdedor && (
        <Portal onClose={()=>{setPerdedor(false)}}>
          <Winner /> */}
          {/* <div className='display-game-loser-one'><label className='display-game-loser-two'>perdiste por $%$!</label></div> */}
        {/* </Portal> */}
    {/*   )} */}
     {/* {ganador === false && (
        <Portal onClose={closedPortal3}>
          <div className='display-game-loser-one'><label className='display-game-loser-two'>GANASTE!</label></div>
        </Portal>
      )}  */}
      {portal === "comunal" && (
        <Portal onClose={closedPortal}>
          <LuckyCard data={cardBack} />
        </Portal>
      )}
      {portal === "property" && (
        <Portal onClose={closedPortal}>
          <PropertyCard data={property} username={meBox.username} buy={meBox.buy}  henryCoin={meBox.henryCoin} />
        </Portal>
      )}
      {portal === "railway" && (
        <Portal onClose={closedPortal}>
          <RailwayCard data={train} username={meBox.username} buy={meBox.buy} henryCoin={meBox.henryCoin} />
        </Portal>
      )}
      {portal === "service" && (
        <Portal onClose={closedPortal}>
          <ServiceCard data={service} username={meBox.username} buy={meBox.buy} henryCoin={meBox.henryCoin} />
        </Portal>
      )}
      {portal === "tax" && (
        <Portal onClose={closedPortal}>
          <TaxCard data={tax} />
        </Portal>
      )}
      {portal === "goJail" && (
        <Portal onClose={closedPortal2}>
          <Jail data={jailData} />
        </Portal>
      )}
      {portal === "jail" && (
        <Portal onClose={closedPortal3}>
          <Jail username={meBox.username} buy={meBox.buy} data={jailData} />
        </Portal>
      )}
      {portal === "stop" && (
        <Portal onClose={closedPortal4}>
          <Jail data={jailData} />
        </Portal>
      )}
      <div>
        {/* <PlayerProps
          target1={dataPlayers.target1.box}
          target2={dataPlayers.target2.box}
          target3={dataPlayers.target3.box}
          target4={dataPlayers.target4.box}
        /> */}
      </div>
      <div className="display-beta-body-display no-select">
        {status === "inGame" ? (
          <div className="display-beta-container-gametable">
            <div className="display-beta-container-gametable-cube">
              <div style={style}>
                <div className="display-beta-align-game">
                  <Board
                    className="display-beta-board-position"
                    cards={info.table}
                  />
                  <div className="display-beta-game-box">
                    {dataPlayers.target1.status && (
                      <div
                        style={{
                          backgroundColor: "transparent",
                          marginLeft: `${1260 - dataPlayers.target1.x}px`,
                          marginTop: `${1260 - dataPlayers.target1.y}px`,
                        }}
                        className="display-beta-target"           /*   src={require(`../room/img/`).default} */
                      ><img className={`${dataGame.target1.box >= 10 && dataGame.target1.box <= 20 ? 'displaygamebeta-giro90 ' : dataGame.target1.box >= 21 && dataGame.target1.box <= 30 ? 'displaygamebeta-giro180 ': dataGame.target1.box >= 31 && dataGame.target1.box <= 39 ? 'displaygamebeta-giro270 ': ''}displaygamebeta-token-target1`} src={require(`../room/img/${dataPlayers.target1.img}`).default} width='50'/></div>
                    )}
                    {dataPlayers.target2.status && (
                      <div
                      
                        style={{
                          backgroundColor: "transparent",
                          marginLeft: `${1260 - dataPlayers.target2.x}px`,
                          marginTop: `${1260 - dataPlayers.target2.y}px`,
                        }}
                        className="display-beta-target"
                      ><img className={`${dataGame.target2.box >= 10 && dataGame.target2.box <= 20 ? 'displaygamebeta-giro90 ' : dataGame.target2.box >= 21 && dataGame.target2.box <= 30 ? 'displaygamebeta-giro180 ': dataGame.target2.box >= 31 && dataGame.target2.box <= 39 ? 'displaygamebeta-giro270 ': ''}displaygamebeta-token-target2`} src={require(`../room/img/${dataPlayers.target2.img}`).default} width='50'/></div>
                    )}
                    {dataPlayers.target3.status !== false ? (
                      <div
                        style={{
                          backgroundColor: "transparent",
                          marginLeft: `${1260 - dataPlayers.target3.x}px`,
                          marginTop: `${1260 - dataPlayers.target3.y}px`,
                        }}
                        className="display-beta-target"
                      ><img className={`${dataGame.target3.box >= 10 && dataGame.target3.box <= 20 ? 'displaygamebeta-giro90 ' : dataGame.target3.box >= 21 && dataGame.target3.box <= 30 ? 'displaygamebeta-giro180 ': dataGame.target3.box >= 31 && dataGame.target3.box <= 39 ? 'displaygamebeta-giro270 ': ''}displaygamebeta-token-target3`} src={require(`../room/img/${dataPlayers.target3.img}`).default} width='50'/></div>
                    ) : (
                      <></>
                    )}
                    {dataPlayers.target4.status !== false && (
                      <div
                        style={{
                          backgroundColor: "transparent",
                          marginLeft: `${1260 - dataPlayers.target4.x}px`,
                          marginTop: `${1260 - dataPlayers.target4.y}px`,
                        }}
                        className="display-beta-target"
                      ><img className={`${dataGame.target4.box >= 10 && dataGame.target4.box <= 20 ? 'displaygamebeta-giro90 ' : dataGame.target4.box >= 21 && dataGame.target4.box <= 30 ? 'displaygamebeta-giro180 ': dataGame.target4.box >= 31 && dataGame.target4.box <= 39 ? 'displaygamebeta-giro270 ': ''}displaygamebeta-token-target4`} src={require(`../room/img/${dataPlayers.target4.img}`).default} width='50'/></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>error</div>
        )}
      </div>
      <div className="display-beta-bajo-touch">
        <div className="display-beta-align-log">
          <GamingLog />
        </div>
      </div>
      <div
        className="display-beta-touch"
        onWheel={handleWheelEvent}
        onMouseDown={handleMousedownEvent}
        onMouseMove={handleOnMouseMoveEvent}
        onMouseUp={handleOnMouseUpEvent}
        onMouseOut={handleOnMouseUpEvent}
      >
        {/* <div className="display-beta-align-chatgame">
            <ChatGame />
          </div>
        <div className="display-beta-align-gameoptions">  
      <GameOptions host={user.username === host} gameOver={() => {
        socket.emit("gameDashboard", { type: "gameOver" });
      }} meEnd={() => {
        socket.emit("gameDashboard", { type: "meEnd" });
      }}/>
    </div>  
    <div className="display-beta-align-gameturns">
            <Turns /> */}
            <div className="display-beta-align-mepanel">
          <MePanel />
        </div>
        <div className="display-beta-align-gameturns">
          <Turns action={closeAndOpen} />
        </div>
        {/* <div  className="display-beta-align-playerprops">
        <PlayerProps action={closeAndOpen}/>
        </div> */}
        <div className="display-beta-align-dataplayer">
          {/* <Turns /> */}
          <DataPlayerInfo
            action={closeAndOpen}
            status={minimizarPlayers.status}
            target={minimizarPlayers.target}
          />
        </div>
        {roll && (
          <div className="display-beta-align-dices">
            <Dices
              rollOne={rollDicesInGame.valorOne}
              rollTwo={rollDicesInGame.valorTwo}
              username={rollDicesInGame.username}
            />
          </div>
        )}
      </div>
      <div className="display-beta-align-gameturnsoptions">
        <TurnsOptions
          turn={user.username === actualTurn}
          roll={() => {
            dispatch(setMoveTurn(false));
            socket.emit("gameDashboard", { type: "roll" });
          }}
          pass={() => {
            socket.emit("gameDashboard", { type: "passTurn" });
          }}
        />
      </div>
      <div className="display-beta-align-trading">
        <Trading />
      </div>
      <div className="display-beta-align-chatgame">
        <ChatGame />
      </div>
      <div className="display-beta-align-gameoptions">
        <GameOptions
          host={user.username === host}
          gameOver={() => {
            socket.emit("gameDashboard", { type: "gameOver" });
          }}
          meEnd={() => {
            socket.emit("gameDashboard", { type: "meEnd" });
          }}
        />
      </div>
    </div>
  );
};

export default DisplayGameBeta;

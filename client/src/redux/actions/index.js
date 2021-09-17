export {
  register,
  setLoading,
  setAuthenticate,
  setToken,
  setUser,
  logOut,
  login,
  checkToken,
} from "./auth";
export {
  getInfoDb,
  postPlayer,
  setStatusInfo,
  filterComunalRandom,
  filterLuckyRandom,
} from "./infoDb";
export {
  setDefault,
  resetTable,
  changeValueTable,
  changeValueTarget,
} from "./game";
export { setGame, setTargetValue, setTurns, kickPlayer, setGameStatus, setGameRoll, buyPropertyAction} from "./henropolyGame";
export { setView } from "./view";

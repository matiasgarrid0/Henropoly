import { Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { Nav, Loading, ViewBoard } from "./components";
import { SwitchPage, Game, DashBoardBeta } from "./views";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, checkToken, connectSocket } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      dispatch(checkToken(token));
      dispatch(connectSocket(token));
    } else {
      dispatch(setLoading(false));
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={SwitchPage} />
        <Route path="/game" exact component={Game} />
        <Route path="/ViewBoard" exact component={ViewBoard} />
        <Route path="/beta" exact component={DashBoardBeta} />
      </Switch>
    </div>
  );
};

export default App;

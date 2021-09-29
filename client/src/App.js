import { Route, Switch } from "react-router-dom";
import React, { useEffect } from 'react';
import { Nav, Loading } from './components';
import { SwitchPage, AboutUs} from './views'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, checkToken, getInfoDb } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token } = useSelector((state) => state.auth);
  const { stateI } = useSelector((state) => state.reducerInfo);

  useEffect(() => {
    if (isAuth) {
      dispatch(checkToken(token));
    } else {
      dispatch(setLoading(false));
    }
  }, []);
  useEffect(() => {
   if(!stateI){
    dispatch(getInfoDb());
   }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={SwitchPage} />
        <Route path="/AboutUs" exact component={AboutUs} />
      </Switch>
    </div>
  ); 
};

export default App;
import { Route, Switch } from "react-router-dom";
import React, { useEffect } from 'react';
import { Nav, Loading, Board } from './components';
import { SwitchPage } from './views'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, checkToken } from './redux/actions'

const App =() => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token } = useSelector((state) => state.auth);
  
  useEffect(()=>{
    if(isAuth){
      dispatch(checkToken(token));
    } else{
      dispatch(setLoading(false));
    }
  /* eslint-disable react-hooks/exhaustive-deps */
  },[]);
  
  if(isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={SwitchPage} />
        <Route path="/board" exact component={Board} />
      </Switch>
    </div>
  )
}

export default App;

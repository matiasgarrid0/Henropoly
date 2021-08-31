import { Route, Switch } from "react-router-dom";
import React from 'react';
import { Nav } from './components';
import { Home } from './views'

const App =() => {
  return (
    <>
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  )
}

export default App;

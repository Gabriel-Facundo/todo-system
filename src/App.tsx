import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {HOME, LOGIN} from 'routes'
import Home from 'pages/home'
import Login from 'pages/login'


function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path={LOGIN} component={Login}/>
        <Route path={HOME} component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

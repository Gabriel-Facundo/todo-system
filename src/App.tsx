import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {TODO, LOGIN} from 'routes'
import {LinearProgress} from '@material-ui/core'

const Login = lazy(() => import('pages/login'))
const Todos = lazy(() => import('pages/todos'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress/>}>
        <Switch >

          <Route path={LOGIN} component={Login}/>
          <Route path={TODO} component={Todos}/>

          <Route><Redirect to={LOGIN}/></Route>
          
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

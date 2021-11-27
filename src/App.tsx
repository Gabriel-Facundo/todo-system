import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {TODO, LOGIN, NOT_FOUND, NOT_AUTHORIZED} from 'routes'
import {LinearProgress} from '@material-ui/core'

const Login = lazy(() => import('pages/login'))
const Todos = lazy(() => import('pages/todos'))
const NotFound = lazy(() => import('pages/notFound'))
const NotAuthorized = lazy(() => import('pages/notAuthorized'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress/>}>
        <Switch >
          <Route path='/' exact component={Login}/>
          <Route path={LOGIN} exact component={Login}/>
          <Route path={TODO} exact component={Todos}/>
          <Route path={NOT_FOUND} exact component={NotFound}/>
          <Route path={NOT_AUTHORIZED} exact component={NotAuthorized}/>
          <Route><Redirect to={NOT_FOUND}/></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

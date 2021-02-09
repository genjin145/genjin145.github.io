import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Country from './pages/country';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/country/:code" exact>
          <Country />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

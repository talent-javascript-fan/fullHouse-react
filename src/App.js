import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  </BrowserRouter>
)

export default App;
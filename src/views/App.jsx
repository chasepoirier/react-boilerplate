import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from 'components'

import Home from './Home'
import About from './About'

import Routes from '../utils/Routes'

const App = () => (
  <section>
    <Navbar />
    <section>
      <Switch>
        <Route exact path={Routes.primary.home.path} component={Home} />
        <Route exact path={Routes.primary.about.path} component={About} />
      </Switch>
    </section>
  </section>
)

export default App

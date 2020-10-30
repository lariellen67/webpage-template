import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Another from '~/pages/Another'
import Main from '~/pages/Main'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/another" component={Another} />
      </Switch>
    </BrowserRouter>
  )
}

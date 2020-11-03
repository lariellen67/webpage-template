import React from 'react'
import { Switch } from 'react-router-dom'

import Home from '~/pages/Home'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

import Route from './Route'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} isPrivate />
      <Route path="/register" component={SignUp} isPrivate />
    </Switch>
  )
}

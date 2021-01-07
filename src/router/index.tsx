import { Switch, Route } from 'react-router-dom'

import Home from '@pages/home'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Router

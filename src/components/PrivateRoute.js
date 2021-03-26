import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import BubblePage from './BubblePage'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={() => {
      if (window.localStorage.getItem("token")) {
        return <BubblePage />
      } else {
        return <Redirect to="/"/>
      } 
    } }/>
  )
}

export default PrivateRoute
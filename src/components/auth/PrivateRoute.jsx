import React from 'react'
import { Redirect, Route } from 'react-router'
import { fakeAuth } from './auth'

const PrivateRoute = ({children,...rest}) => {
    console.log({children,rest})
  return (
    <Route
    {...rest}
    render={({location})=>
    fakeAuth.isAuthenticated ? (
        children
      ): (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
}
    />

    
  )
}

export default PrivateRoute
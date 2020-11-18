import React, {useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import LogIn from './Components/LogIn'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue()

  // Once a user logs in they will remain authorized for the session through Firebase
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        
        if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
     
        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
            
            <Route exact path="/">
              <Header />
              <Home />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App

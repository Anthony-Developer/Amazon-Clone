import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import LogIn from './Components/LogIn'

function App() {
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

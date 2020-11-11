import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          
          </Switch>
      </div>
    </Router>
  )
}

export default App

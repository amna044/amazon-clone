import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login  from "./components/Login";

function App() {
  return (
        <Router>
          <div>
          <Switch>
            <Route path="/checkout" > 
              <Header />
              <Checkout/>
              <h1> checkout</h1>
            </Route>
            <Route path="/login" Component={Login}> </Route>
            <Route path="/signout">
              <h1>SignOut</h1>
            </Route>
            <Route path="/"> 
            <Header />
            <Home/>
          
            </Route>
          </Switch>
    </div>
      </Router>
  );
}

export default App;

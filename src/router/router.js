import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';


export default function App() {
  return (
    <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        
        <Route path="/register">
            <Register/>
        </Route>
        
        <Route path="/login">
        <Login/>
        </Route>

        <Route path="/">
            <Home/>
        </Route>        

    </Switch>
  );
}
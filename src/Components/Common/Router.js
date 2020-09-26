import React, { Component } from 'react'

import {  Switch, Route} from "react-router-dom";
import Home from './../../Pages/home'
import About from './../../Pages/about'
import Service1 from './../../Pages/service1'
import Service2 from './../../Pages/service2'
import Service3 from './../../Pages/service3'
export default class RouterMenu extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/service1">
                    <Service1 />
                </Route>
                <Route path="/service2">
                    <Service2 />
                </Route>
                <Route path="/service3">
                    <Service3 />
                </Route>
            </Switch>
            </>
            
           
        )
    }
}

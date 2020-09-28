import React, { Component } from 'react'

import {  Switch, Route} from "react-router-dom";
import Dashboard from './../../Pages/dashboard'
export default class RouterMenu extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                
            </Switch>
            </>
            
           
        )
    }
}

import React from 'react'
import Header from './Header'
import { Switch , Route, Link } from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Cart from './Cart'
import Checkout from './Checkout'

export default function Container() {
    return (
        <div>
            
            <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/shop">
                    <Store />
                </Route>
                <Route path="/shopping-cart">
                    < Cart/>
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
            </Switch>
            </Router>
            
        </div>
    )
}

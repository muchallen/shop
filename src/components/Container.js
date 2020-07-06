import React, {useEffect} from 'react'
import Header from './Header'
import { Switch , Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import AddItems from './addItems'
import Store from './Store'
import Cart from './Cart'
import {getAllProducts} from '../actions/products'
import Checkout from './Checkout'

import {connect} from 'react-redux'

const Container =(props)=>{
   
        useEffect(()=> {
            props.getAllProducts()}
        , []
        )
        return (
        <div>
            
            <Router>
            <Header />
            <Switch>
            <Route exact path="/">
                    <Home />
                </Route>

            <Route path="/add">
                <AddItems />
            </Route>
                
                <Route  path="/shop">
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

const maStateToProps= state=>({
    allproducts : state.productsReducer.products,
    })
    
    export default connect(maStateToProps,{getAllProducts,})(Container)
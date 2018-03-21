import React from 'react'
import Cart from './Components/Cart/cart'
import Product from './Components/Product/product'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Homepage from "./Components/Homepage/home";


export default () =>(
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product" component={Product}/>
    </Switch>
)

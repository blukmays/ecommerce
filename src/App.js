import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Homepage from './Components/Homepage/home.js'
import Product from './Components/Product/product.js'
import Cart from './Components/Cart/cart.js'



class App extends Component {
  render() {
    return (
      <div className="App">




        <Switch>
             <Route exact path="/" component={Homepage} />
             <Route path="/1" component={Cart}  />
            <Route path="/2" component={Product}  />
         </Switch>

      </div>
    );
  }
}

export default App;

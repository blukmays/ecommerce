import React, { Component } from 'react';
import { connect } from 'react-redux'
import './cart.css';
import styled from 'styled-components'
import Menu from '../menu'

const CartContent = styled.section``



class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <Menu />

                <div>
                    <h1>Cart</h1>
                </div>

            </div>
        );
    }
}






export default Cart;
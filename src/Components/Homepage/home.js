import React, { Component } from 'react';
import './home.css';
import styled from 'styled-components'
import Menu from '../menu'
import Kombucha from './Kombucha.png'
import Orange from './orange.png'

class Home extends Component {

    render() {
        return (
            <div className="container">
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Karma|Lato|Pacifico');
                </style>


                <div class="box1">
                    <Menu class="menu" />
                    <div >
                        <h1 class="bucha">The Bucha Shop</h1>
                        <h3 class="bucha2">All Natural, Non GMO</h3>
                    </div>
                </div>




                <div class="box2">
                    <img src={Kombucha} alt="kombucha" class="pic1"/>
                    <p class="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                <div>
                    <img src={Orange} alt="orange" class="pic2"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>


                <div>

                </div>


            </div>



        );
    }
}

export default Home;



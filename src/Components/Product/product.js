import React, { Component } from 'react';
import './product.css';
import Menu from '../menu'
import Lemonade from './kombucha4.png'
import Tumeric from './kombucha2.png'
import Ginger from './kombucha3.png'
import Apple from './Apple.jpg'
import {increasecart, decreasecart,} from "../../actions";
import { connect } from 'react-redux'


class Product extends Component {
    render() {
        const { products, onIncrease, onDecrease} = this.props;
        return (
            <div className="product">

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Lobster|Pacifico');
                </style>

                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>

                <Menu/>

                <div><h1 class="Products">Our Products</h1></div>

                <div className="container">

                    <div className="row">
                        <div className="col-sm-3">
                    <h1 class="name">Raspberry Lemonade</h1>
                            <img class="lemon" src={Lemonade} alt="Lemonade"/>
                        </div>


                    <div className="">
                        <p >Quantity</p>
                        <div>Products: {products}</div>


                        <button onClick={onIncrease}>+</button>
                        <button onClick={onDecrease}>-</button>


                        {/*<input type="number" min="0" />*/}
                        {/*<input type="submit" name="Add To Cart" value="Add To Cart"/>*/}
                        <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                    </div>


                </div>

                <div>
                    <div className="row">
                    <div className="col-sm-3">
                    <h2 class="name">Mango Tumeric</h2>
                    <img src={Tumeric} alt="Tumeric"/>
                    </div>
                    <p>Quantity</p>
                    <input  type="number" min="0"/>
                    <input type="submit" name="Add To Cart" value="Add To Cart"/>
                    <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-3">
                    <h2 class="name">Orange Ginger</h2>
                    <img src={Ginger} alt="Ginger"/>
                    </div>
                    <p>Quantity</p>
                    <input type="number" min="0"/>
                    <input type="submit" name="Add To Cart" value="Add To Cart"/>
                    <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>






            </div>
        );
    }
}
// const mapStateToProps= state => {
//     return {
//         products: state.products
//     }
// };
//
//
//
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrease() {
//             return dispatch(increasecart())
//         },
//         onDecrease() {
//             return dispatch(decreasecart())
//         }
//     }
// };
//
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Product)
export default Product;
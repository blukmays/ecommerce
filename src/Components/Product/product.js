import React, { Component } from 'react';
import './product.css';
import Menu from '../menu'
import Lemonade from './kombucha4.png'
import Tumeric from './kombucha2.png'
import Ginger from './kombucha3.png'
import Apple from './Apple.jpg'
import {increasecart, decreasecart,} from "../../actions";
import { connect } from 'react-redux'



export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(products => {
                console.log('ddddddd', products)
                this.setState({products: products})
            })
            .catch(err => console.log(err))
    }

    render() {
        const productMap = this.state.products.length ? this.state.products.map((product, i) => {
            return (

                    <div key={i} className="row">
                        <div className="col-sm-4">
                            <h2 className="name">{product.name}</h2>
                            <img src={product.url} width="300px" height="400px"/>
                        </div>
                        <div className="col-sm-8">
                            <p >Price: {product.price}</p>
                            <p >Quantity</p>
                            <button onClick={onIncrease}>+</button>
                            <button onClick={onDecrease}>-</button>
                            <p className="para1">{product.description}</p>
                        </div>
                        <hr/>
                    </div>


            )
        }) : [];

        const { products, onIncrease, onDecrease} = this.props;
        return (
            <div className="container">
                <div><h1 className="Products">Our Products</h1></div>
                {productMap}
            </div>
        );
    }
}

import React, {Component} from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/product">Product</Link> | <Link to="/newproduct">New Product</Link>
            </div>
        );
    }
}






export default Menu;
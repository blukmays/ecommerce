import React, {Component} from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Home</Link> | <Link to="/Cart">Cart</Link> | <Link to="/Product">Product</Link>
            </div>
        );
    }
}






export default Menu;
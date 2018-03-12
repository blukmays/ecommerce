import React, {Component} from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Home</Link> | <Link to="/1">Cart</Link> | <Link to="/2">Product</Link>
            </div>
        );
    }
}






export default Menu;
import React, {Component} from 'react'
import { Link } from 'react-router-dom'



class Menu extends Component {
    render() {
        console.log('api urll', process.env.REACTAPI_URL)
        return (
            <div className="menu">
                <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/product">Product</Link> | <Link to="/newproduct">New Product</Link> | <a href="http:localhost:3001/api/auth/google">Log In</a>
            </div>
        );
    }
}






export default Menu;
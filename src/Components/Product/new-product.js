import React from 'react';

export default class ProductForm extends React.Component {

    addProduct(event) {
        event.preventDefault();

        const product = {
            name: this.name.value,
            price: this.price.value,
            url: this.url.value,
            description: this.description.value
        }

        fetch("http://localhost:8080/api/products", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json)
            .then(createdProduct => console.log('created product', createdProduct))
            .catch(err => console.log('some err', err));
    }

    render() {
        return(
            <div className="container">
            <form>
                Name: <input ref={i => this.name = i}/> <br/>
                Price: <input ref={i => this.price = i}/> <br/>
                URL: <input ref={i => this.url = i}/> <br/>
                Description: <input ref={i => this.description = i}/> <br/>
                <button onClick={this.addProduct.bind(this)}>Create</button>
            </form>
            </div>
        )
    }
}
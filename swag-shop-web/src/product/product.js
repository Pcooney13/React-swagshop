import React, {Component} from 'react';
import './product.css';

class Product extends Component {
    render() {
        return(
            <div className="card product">
                <div className="img-holder">
                    <img className="card-img-top" alt="Product" src={this.props.imgUrl}></img>
                </div>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="#" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;
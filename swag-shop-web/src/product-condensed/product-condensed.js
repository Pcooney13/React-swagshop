import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {

    constructor(props) {
        super(props);

        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }



    render() {
        return(
            <li className="list-group-item pc-list">
                <a className="btn btn-outline-danger x-button" onClick={() => this.removeProduct()}>x</a><span>{this.props.product.title} | <b>${this.props.product.price}</b></span>
            </li>
        );
    }
}

export default ProductCondensed;

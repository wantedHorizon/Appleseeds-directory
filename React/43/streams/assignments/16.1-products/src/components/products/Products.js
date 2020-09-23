import React, { Component } from 'react';
import store from '../../store/store';
import { Link } from 'react-router-dom';
class Products extends Component {
    state = {
        products: store
    }

    createProducts = () => {
        return this.state.products.map(p => {
            return <div key={p.id}><Link to={{pathname:`/products/${p.id}`,  state:p}}>{p.title}</Link></div>
        })
    }
    render() {
        
        return (
            <div className='Products'>
                <h1>Products</h1>
                {this.createProducts()}        
            </div>
        )
    }
}
export default Products;
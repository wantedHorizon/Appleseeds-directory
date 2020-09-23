import React from 'react';
import { Link } from 'react-router-dom';
//import store from '../../../store/store';
import Routes from '../../../router/Routes';
const Product = props => {
    // const id = Number(props.match.params.id);
    // console.log(props);
    // const product = store.find(p => p.id === id);
    //via state router
    const product = props?.location?.state;
    if (!product) {
        props.history.push(Routes.pageNotFound);
        return null;
    }
    else {
        const { title, imageUrl, price, size } = product;
        return (
            <div className="ui card" style={{ padding: '5px', display: 'inline-block' }}>
                <h1>{title}</h1>
                <img className="" src={imageUrl} alt={title} style={{borderRadius: '10px'}} />
                <div className="content" style={{textAlign:'left'}}>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Size:</strong> {size}</p>

                </div>
                <Link to={Routes.products}>Back</Link>
            </div>

        );
    }


}
export default Product;


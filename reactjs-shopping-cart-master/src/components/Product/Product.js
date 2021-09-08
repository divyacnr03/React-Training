import React from 'react';
import { Link , useParams} from 'react-router-dom';


function Product ({ name, price, currency, image, isInCart, id }){

        const { productid }  = useParams();
        console.log('----', productid)

        return (
            <Link to={`product/${id}`}>
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick = { () => console.log(`${name} is added to cart`)}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        );
}



export default Product;

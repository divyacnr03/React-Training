import React from 'react';
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1> Welcome to the Year End Sale</h1>
                    <Link to='/productlist' ><h3>Product</h3> </Link>
                    <Link to='/cart' ><h3>Cart</h3></Link>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import Product from './components/Product/Product';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { func } from 'prop-types';
import data from './data/products';

const oneProduct =   {
    id: 2,
    name: 'Sessel Sofie',
    price: 249.99,
    currency: 'EUR',
    image: 'images/02.jpg',
  }

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1> Shopping Cart Example</h1>
                <Switch>
                    < Route path='/' exact component={Welcome} />
                    < Route path='/productlist' render={
                                (props) =>
                                         <ProductList {...props} products={ data }/>
                                         } />
                    
                    < Route path='/cart' component={Cart} />
                    < Route path='/product/:productid' render={
                                (props) =>
                                         <Product {...props} {...oneProduct}/>
                                         }/>

                </Switch>
            </div>
        </Router>
    );
}


export default App;

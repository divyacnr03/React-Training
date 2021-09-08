import React from 'react';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import Product from './components/Product/Product';
import Welcome from './Welcome'
import data from './data/products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const currentProduct = {
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
                    <Route path='/' exact component={Welcome} />
                    <Route path='/productlist' component={ (props) => <ProductList {...props} products={data}/>} />  
                    <Route path='/cart' component={Cart} />
                    <Route path='/product/:productid' component={ (props) => <Product {...props} {...currentProduct}/>} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;




import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import  thunk from "redux-thunk"
import updateInvrentoryList from './reducers/student'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(updateInvrentoryList, 
    composeEnhancer(applyMiddleware(thunk, logger )));


export default store;








































// ,
    //         /* preloadedState, */
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
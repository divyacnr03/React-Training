import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import StudentAttendanceSheet from './StudentAttendanceSheet';
import { Provider} from 'react-redux';
import store from './store/configureStore';


// ReactDOM.render( <App />, document.getElementById('root'));
ReactDOM.render( <Provider   vider store={store}>
    <App /> 
    </Provider>
    , document.getElementById('root'));







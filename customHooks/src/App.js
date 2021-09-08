import React from 'react';
import Chat from './customHooks/Chat';
import Dashboard from './customHooks/Dashboard';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1> DashBoard </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <Dashboard />
                </div>
                <div className="col-md-4">
                    <Chat />
                </div>
            </div>

        </div>
    );
}

export default App;

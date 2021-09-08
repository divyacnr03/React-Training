import React, { useState, useEffect } from 'react';
import axios from 'axios';

import wrapFetchUser from './wrapFetchUser';

class Dashboard extends React.Component {
    constructor() {
        super(props);
    }


    render() {
        return (
            <div>
                {
                    this.props.friends.length > 0 ?
                        friends.map(friend => <div key={friend.id}>{friend.name}</div>)
                        : error.message
                }
            </div >
        )
    }

}

export default wrapFetchUser(Dashboard);
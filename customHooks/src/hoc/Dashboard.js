import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor() {
        super(props);
        this.state = {
            friends =[],
            error = {}
        }
    }
    componentDidMount() {

        if (this.props.user.loggedIn) {
            axios(`/api/${this.props.user.id}/friends`).then(response => {
                this.setState({ friends: response.data.friends })
            })
                .catch(error => setError(error))

        }
    }

    render() {
        return (<div>
            {
                friends.length > 0 ?
                    friends.map(friend => <div key={friend.id}>{friend.name}</div>)
                    : error.message
            }
        </div >)
    }

}

export default Dashboard
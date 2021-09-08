import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat(props){
    const [friends, setFriends] = useState([])
    const [error, setError] = useState({})
    
    useEffect(() => {
        if(props.user.loggedIn){
            axios(`/api/${props.user.id}/friends`).then(response => {
                response.json().then( friends => setFriends(friends))
            })
            .catch(error => setError(error))
        }
    }, [props.user.isLoggedIn, props.user.id])

    return (<div>
        { friends.length > 0 ? 
            friends.map(friend => <div key={friend.id}>{friend.name}</div> )
            : error.message }
        </div>)
}

export default Chat
import React, { useState, ussEffect } from 'react';
import axios from 'axios'

export default function useFriendList(user){
    const [friends, setFriends] = useState([])
    const [error, setError] = useState({})
    ussEffect(() => {
        if(user.loggedIn){
            axios(`/api/${user.id}/friends`).then(response => {
                response.json().then( friends => setFriends(friends))
            })
            .catch(error => setError(error))
        }
    }, [user.id, user.isLoggedIn])

    return [friends, error, setFriends, setError]
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat(props){
    const [friends, error] = useFriendList();

    return (<div>
        { friends.length > 0 ? 
            friends.map(friend => <div key={friend.id}>{friend.name}</div> )
            : error.message }
        </div>)
}

export default Chat



import React from 'react';

const HOC = (props) => {

  const isAuthenticated = () => {
    return false
  }

  return <div>

    {isAuthenticated() ? props.children : <div>You are not authorized</div>}

  </div>
}

export default HOC;
import React from 'react';

import Paragraph from '../../components/Paragraph/Paragraph'

import './body.css';

const Body = (props) => {
  return (
    <div className="body">
      <div>
        <h2>IMAGE</h2>
      </div>
      <div className="options-main">
        {
          props.options.map(name => {
            return <Paragraph text={name} />;
          })
        }
      </div>
    </div>
  )
}

export default Body;
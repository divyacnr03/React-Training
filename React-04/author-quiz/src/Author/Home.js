import React from 'react';

import Header from './Header/Header'
import Body from './Body/Body'

function Home() {
  return (
    <>
      <Header />
      <Body options={["Maceth", "The Shining", "Heart Of Darkness", "Hamlet"]} />
    </>
  );
}

export default Home;

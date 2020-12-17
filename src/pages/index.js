import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css'

function IndexPage(props) {

  return (
  <main>
      <Helmet>
        <title>Font Flash</title>
      </Helmet>
      <h1 style={{ fontFamily: 'Playfair Display' }}>
      Hello World
      </h1>
      <h2>Lato Font Test</h2>
  </main >
  )
}

export default IndexPage;

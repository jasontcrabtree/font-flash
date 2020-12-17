import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css'

function IndexPage(props) {

  return (
  <>
      <Helmet>
        <title>Font Flash</title>
      </Helmet>
    <h1>Hello World</h1>
  </>
  )
}

export default IndexPage;

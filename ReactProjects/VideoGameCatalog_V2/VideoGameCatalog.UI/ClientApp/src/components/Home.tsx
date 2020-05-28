import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
        <h1>Welcome!</h1>
        <p>Please select a tab from the upper navigation bar to view the pages for this web app!</p>
  </div>
);

export default connect()(Home);

import * as React from 'react';
import { connect } from 'react-redux';
import CatalogueTable from './CatalogueTable';

const Home = () => (
    <div>
        <h1>Home</h1>
        <p>Main Catalogue goes here dummy</p>
        <CatalogueTable/>
  </div>
);

export default connect()(Home);

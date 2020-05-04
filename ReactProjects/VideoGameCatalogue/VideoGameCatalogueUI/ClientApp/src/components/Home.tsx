import * as React from 'react';
import { connect } from 'react-redux';
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

let data: object[] = [];

const Home = () => (
    <div>
        <h1>Home</h1>
        <p>Table goes here dummy</p>
        <BootstrapTable data={data} striped hover>
            <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
  </div>
);

export default connect()(Home);

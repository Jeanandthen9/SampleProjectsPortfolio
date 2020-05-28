import * as React from 'react';
import { connect } from 'react-redux';
import IconFormatter from './shared/IconFormatter';
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

let data: object[] = [
    { id: 1, name: 'Game 1', platforms: ['XBox'] },
    { id: 2, name: 'Game 2', platforms: ['Steam'] },
    { id: 3, name: 'Game 3', platforms: ['Steam', 'XBox'] },
    { id: 4, name: 'Game 4', platforms: ['XBox', 'Steam'] }
];

function platformsFormatter(cell: any, row: any) {
    let returnValue: any = <IconFormatter list={row.platforms} type='platform' />;

    return returnValue;
};

function actionsFormatter(cell: any, row: any) {
    let returnValue: any = <IconFormatter data={row} type='actions' />;

    return returnValue;
};

const Home = () => (
    <div>
        <h1>Home</h1>
        <p>Table goes here dummy</p>
        <BootstrapTable data={data} search={true} striped hover>
            <TableHeaderColumn isKey dataField='id' dataSort sortIndicator={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort sortIndicator={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='platform' dataFormat={platformsFormatter}>Platform(s)</TableHeaderColumn>
            <TableHeaderColumn dataFormat={actionsFormatter}>Actions</TableHeaderColumn>
        </BootstrapTable>
  </div>
);

export default connect()(Home);

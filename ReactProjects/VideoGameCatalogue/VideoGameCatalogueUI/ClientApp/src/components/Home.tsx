import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox, faSteam } from '@fortawesome/free-brands-svg-icons';
import IconFormatter from './shared/IconFormatter';
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

let data: object[] = [
    { id: 1, name: 'Game 1', platform: ['XBox'] },
    { id: 2, name: 'Game 2', platform: ['Steam'] },
    { id: 3, name: 'Game 3', platform: ['Steam', 'XBox'] },
    { id: 4, name: 'Game 4', platform: ['XBox', 'Steam'] }
];

function platformFormatter(cell: any, row: any) {
    let returnValue: any = <IconFormatter list={row.platform} type='platform' />;

    return returnValue;
};

function actionsFormatter(cell: any, row: any) {
    //let returnValue: any = <IconFormatter list={row.platform} type='platform' />;
    let returnValue: any = <IconFormatter id={row.id} type='actions' />;

    return returnValue;
};

const Home = () => (
    <div>
        <h1>Home</h1>
        <p>Table goes here dummy</p>
        <BootstrapTable data={data} search={true} striped hover>
            <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='platform' dataFormat={platformFormatter}>Platform(s)</TableHeaderColumn>
            <TableHeaderColumn dataFormat={actionsFormatter}>Actions</TableHeaderColumn>
        </BootstrapTable>
  </div>
);

export default connect()(Home);

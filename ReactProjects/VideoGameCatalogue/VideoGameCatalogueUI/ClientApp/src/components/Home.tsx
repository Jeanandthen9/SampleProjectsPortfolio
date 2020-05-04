import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox, faSteam } from '@fortawesome/free-brands-svg-icons';
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

let data: object[] = [{platform: ['XBox']}, {platform: ['Steam']}, {platform: ['Steam', 'XBox']}];

function platformFormatter(cell: any, row: any) {
    let returnValue: any = null;

    if (cell.toUpperCase() == 'XBOX') {
        returnValue = <FontAwesomeIcon icon={faXbox}/>;
    }
    else if (cell.toUpperCase() == 'STEAM') {
        returnValue = <FontAwesomeIcon icon={faSteam} />;
    }

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
            <TableHeaderColumn>Actions</TableHeaderColumn>
        </BootstrapTable>
  </div>
);

export default connect()(Home);

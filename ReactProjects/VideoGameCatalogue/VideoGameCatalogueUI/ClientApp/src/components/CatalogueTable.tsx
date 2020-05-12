import * as React from 'react';
import IconFormatter from './shared/IconFormatter';
const axios = require('axios').default;
var ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

type CatalogueState = {fakeData: object[], realData: object[]}

class CatalogueTable extends React.Component<{}, CatalogueState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fakeData: [
                { id: 1, title: 'Game 1', platforms: ['XBox'] },
                { id: 2, title: 'Game 2', platforms: ['Steam'] },
                { id: 3, title: 'Game 3', platforms: ['Steam', 'XBox'] },
                { id: 4, title: 'Game 4', platforms: ['XBox', 'Steam'] }
            ],
            realData: []
        };
    };

    componentDidMount() {
        this.getData();
    };

    platformsFormatter(cell: any, row: any) {
        let returnValue: any = <IconFormatter list={row.platforms} type='platform'/>;

        return returnValue;
    };

    actionsFormatter(cell: any, row: any) {
        let returnValue: any = <IconFormatter data={row} type='actions'/>;

        return returnValue;
    };

    getData() {
        axios.get('Catalogue/GetCatalogue')
            .then((response: any) => {
                console.log(response.data.data);
                this.setState({ realData: response.data.data });
            }).catch((error: any) => {
                console.log(error);
            });
    };

    render() {
        if (this.state.realData.length == 0) { return null; };

        return (
            <div>
                <BootstrapTable data={this.state.realData} search={true} striped hover>
                    <TableHeaderColumn isKey dataField='id' dataSort sortIndicator={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataSort sortIndicator={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='platforms' dataFormat={this.platformsFormatter}>Platform(s)</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={this.actionsFormatter}>Actions</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default (CatalogueTable);
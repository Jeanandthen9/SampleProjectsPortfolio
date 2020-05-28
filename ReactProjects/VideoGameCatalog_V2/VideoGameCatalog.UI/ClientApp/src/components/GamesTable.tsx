import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as GamesStore from '../store/Games';
import BootstrapTable from 'react-bootstrap-table-next';

type GamesTableProps =
    GamesStore.GamesState // Redux store state
    & typeof GamesStore.actionCreators // Redux store action creators
    & RouteComponentProps<{}>; // Incoming routing params

class GamesTable extends React.PureComponent<GamesTableProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1>Games Table</h1>
                {this.renderTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestGames();
    }

    private renderTable() {
        const columns = [
                {
                    dataField: 'id',
                    text: 'Id',
                    sort: true
                },
                {
                    dataField: 'title',
                    text: 'Title',
                    sort: true
                },
                {
                    dataField: 'releaseDate',
                    text: 'Release Date',
                    sort: true
                    //formatter: dateFormatter
                },
                {
                    dataField: 'actions',
                    text: 'Actions'
                    //formatter: actionsFormatter
                }
            ];
        return (
            <BootstrapTable keyField='id' data= {this.props.games} columns={columns}/>
        );
    }
}

export default connect((state: ApplicationState) => state.games,
    GamesStore.actionCreators)(GamesTable as any);
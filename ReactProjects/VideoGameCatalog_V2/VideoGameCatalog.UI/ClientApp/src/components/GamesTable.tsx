import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import ReactLoading from 'react-loading';
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
        let val: any;
        if (this.props.isLoading) {
            val = <ReactLoading type="spinningBubbles" color="#8B008B" height={667} width={375}/>;
        } else {
            val = this.renderTable();
        }
        return (
            <React.Fragment>
                <h1>Games Table</h1>
                {val}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        this.props.requestGames();
    }

    private dateFormatter(cell: any, row: any) {
        var returnValue = <Moment format="MMMM D, YYYY">
                              {cell}
                          </Moment>;

        return returnValue;
    }

    private platformsFormatter(cell: any, row: any) {
        var returnValue = "";

        return returnValue;
    }

    private actionsFormatter(cell: any, row: any) {
        var returnValue = "";

        return returnValue;
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
                sort: true,
                formatter: this.dateFormatter
            },
            {
                dataField: 'platforms',
                text: 'Platform(s)',
                formatter: this.platformsFormatter
            },
            {
                dataField: 'actions',
                text: 'Actions',
                formatter: this.actionsFormatter
            }
        ];
        return (
            <BootstrapTable keyField='id' data= {this.props.games} columns={columns}/>
        );
    }
}

export default connect((state: ApplicationState) => state.games,
    GamesStore.actionCreators)(GamesTable as any);
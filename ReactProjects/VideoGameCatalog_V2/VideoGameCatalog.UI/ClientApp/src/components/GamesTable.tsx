import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

type GamesTableProps = RouteComponentProps<{}>;

class GamesTable extends React.PureComponent<GamesTableProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Games Table</h1>
            </React.Fragment>
        );
    }
}

export default connect()(GamesTable);
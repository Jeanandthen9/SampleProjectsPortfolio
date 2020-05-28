import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

type PlatformsTableProps = RouteComponentProps<{}>;

class PlatformsTable extends React.PureComponent<PlatformsTableProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Platforms Table</h1>
            </React.Fragment>
        );
    }
}

export default connect()(PlatformsTable);
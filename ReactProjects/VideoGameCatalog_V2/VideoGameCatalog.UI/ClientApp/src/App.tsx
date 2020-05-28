import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import GamesTable from './components/GamesTable';
import PlatformsTable from './components/PlatformsTable';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faClipboard, faPencilAlt, faTrash, faCompactDisc, faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';

import './custom.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

library.add(fab, faClipboard, faPencilAlt, faTrash, faCompactDisc, faHome, faGamepad);

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/Games' component={GamesTable} />
        <Route path='/Platforms' component={PlatformsTable} />
    </Layout>
);

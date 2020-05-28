import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// STATE
export interface GamesState {
    isLoading: boolean;
    games: Game[];
    //tableColumns: any;
}

export interface Game {
    id: number;
    title: string;
    releaseDate: string;
}

// ACTIONS
interface RequestGamesAction {
    type: 'REQUEST_GAMES';
    //tableColumns: any;
}

interface ReceiveGamesAction {
    type: 'RECEIVE_GAMES';
    games: Game[];
    //tableColumns: any;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestGamesAction | ReceiveGamesAction;

// ACTION CREATORS
export const actionCreators = {
   requestGames: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
       // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        //const columns = [
        //    {
        //        dataField: 'id',
        //        text: 'Id',
        //        sort: true
        //    },
        //    {
        //        dataField: 'title',
        //        text: 'Title',
        //        sort: true
        //    },
        //    {
        //        dataField: 'releaseDate',
        //        text: 'Release Date',
        //        sort: true
        //        //formatter: dateFormatter
        //    },
        //    {
        //        dataField: 'actions',
        //        text: 'Actions'
        //        //formatter: actionsFormatter
        //    }
        //];
        if (appState && appState.games) {
            fetch('game')
                .then(response => response.json() as Promise<Game[]>)
                .then(data => {
                    //dispatch({ type: 'RECEIVE_GAMES', games: data, tableColumns: columns })
                    dispatch({ type: 'RECEIVE_GAMES', games: data });
                });

            //dispatch({ type: 'REQUEST_GAMES', tableColumns: columns });
            dispatch({ type: 'REQUEST_GAMES' });

        }
   }
};

// REDUCER
//const unloadedState: GamesState = { games: [], isLoading: false, tableColumns: [] };
const unloadedState: GamesState = { games: [], isLoading: false };

export const reducer: Reducer<GamesState> = (state: GamesState | undefined, incomingAction: Action): GamesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;

    switch (action.type) {
        case 'REQUEST_GAMES':
        return {
            games: state.games,
            isLoading: true
            //tableColumns: state.tableColumns
        };
        case 'RECEIVE_GAMES':
        return {
            isLoading: false,
            games: action.games
            //tableColumns: action.tableColumns
            }
        default:
            break;
    }

    return state;
};

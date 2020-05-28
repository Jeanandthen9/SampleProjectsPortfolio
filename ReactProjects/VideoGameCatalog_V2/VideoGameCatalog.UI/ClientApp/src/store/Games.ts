import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// STATE
export interface GamesState {
    isLoading: boolean;
    games: Game[];
}

export interface Game {
    id: number;
    title: string;
    releaseDate: string;
}

// ACTIONS
interface RequestGamesAction {
    type: 'REQUEST_GAMES';
}

interface ReceiveGamesAction {
    type: 'RECEIVE_GAMES';
    games: Game[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestGamesAction | ReceiveGamesAction;

// ACTION CREATORS
export const actionCreators = {
   requestGames: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
       // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.games) {
            fetch('/Game/GetAllGames')
                //.then(response => response.json())
                //.then(data => console.log(data));
                .then(response => response.json() as Promise<Game[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_GAMES', games: data });
                });

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
        };
        case 'RECEIVE_GAMES':
        return {
            isLoading: false,
            games: action.games
            }
        default:
            break;
    }

    return state;
};

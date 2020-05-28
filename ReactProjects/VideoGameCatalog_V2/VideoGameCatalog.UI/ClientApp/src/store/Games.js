"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ACTION CREATORS
exports.actionCreators = {
    requestGames: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
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
                .then(function (response) { return response.json(); })
                .then(function (data) {
                //dispatch({ type: 'RECEIVE_GAMES', games: data, tableColumns: columns })
                dispatch({ type: 'RECEIVE_GAMES', games: data });
            });
            //dispatch({ type: 'REQUEST_GAMES', tableColumns: columns });
            dispatch({ type: 'REQUEST_GAMES' });
        }
    }; }
};
// REDUCER
//const unloadedState: GamesState = { games: [], isLoading: false, tableColumns: [] };
var unloadedState = { games: [], isLoading: false };
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
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
            };
        default:
            break;
    }
    return state;
};
//# sourceMappingURL=Games.js.map
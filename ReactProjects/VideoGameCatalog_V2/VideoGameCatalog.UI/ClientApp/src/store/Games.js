"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ACTION CREATORS
exports.actionCreators = {
    requestGames: function () { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.games) {
            fetch('/Game/GetAllGames')
                //.then(response => response.json())
                //.then(data => console.log(data));
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_GAMES', games: data });
            });
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
            };
        case 'RECEIVE_GAMES':
            return {
                isLoading: false,
                games: action.games
            };
        default:
            break;
    }
    return state;
};
//# sourceMappingURL=Games.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_moment_1 = require("react-moment");
var react_loading_1 = require("react-loading");
var GamesStore = require("../store/Games");
var react_bootstrap_table_next_1 = require("react-bootstrap-table-next");
var GamesTable = /** @class */ (function (_super) {
    __extends(GamesTable, _super);
    function GamesTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This method is called when the component is first added to the document
    GamesTable.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    GamesTable.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    GamesTable.prototype.render = function () {
        var val;
        if (this.props.isLoading) {
            val = React.createElement(react_loading_1.default, { type: "spinningBubbles", color: "#8B008B", height: 667, width: 375 });
        }
        else {
            val = this.renderTable();
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Games Table"),
            val));
    };
    GamesTable.prototype.ensureDataFetched = function () {
        this.props.requestGames();
    };
    GamesTable.prototype.dateFormatter = function (cell, row) {
        var returnValue = React.createElement(react_moment_1.default, { format: "MMMM D, YYYY" }, cell);
        return returnValue;
    };
    GamesTable.prototype.platformsFormatter = function (cell, row) {
        var returnValue = "";
        return returnValue;
    };
    GamesTable.prototype.actionsFormatter = function (cell, row) {
        var returnValue = "";
        return returnValue;
    };
    GamesTable.prototype.renderTable = function () {
        var columns = [
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
        return (React.createElement(react_bootstrap_table_next_1.default, { keyField: 'id', data: this.props.games, columns: columns }));
    };
    return GamesTable;
}(React.PureComponent));
exports.default = react_redux_1.connect(function (state) { return state.games; }, GamesStore.actionCreators)(GamesTable);
//# sourceMappingURL=GamesTable.js.map
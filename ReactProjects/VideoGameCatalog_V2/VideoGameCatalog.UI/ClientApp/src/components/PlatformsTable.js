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
var PlatformsTable = /** @class */ (function (_super) {
    __extends(PlatformsTable, _super);
    function PlatformsTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlatformsTable.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Platforms Table")));
    };
    return PlatformsTable;
}(React.PureComponent));
exports.default = react_redux_1.connect()(PlatformsTable);
//# sourceMappingURL=PlatformsTable.js.map
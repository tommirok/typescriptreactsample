/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
// import { Hello } from "./components/Hello";
var App_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById("example"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PageContent_1 = __webpack_require__(4);
var DashboardElement_1 = __webpack_require__(5);
var Counter_1 = __webpack_require__(6);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dashboardElements = [];
        _this.refreshpage = function () {
            alert("Nappia painettu");
            for (var i = 0; i < _this.dashboardElements.length; i++) {
                _this.dashboardElements[i].getBackendData();
                console.log();
            }
        };
        _this.registerCallBack = function (element) {
            _this.dashboardElements.push(element);
            console.log("\"ollaan metodissa redistercallback(), element = $element ");
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.refreshpage }, "Click to refresh"),
            React.createElement("h1", null, "SAP Dashboard"),
            React.createElement(PageContent_1.PageContent, null,
                React.createElement("div", { className: "row" },
                    React.createElement(DashboardElement_1.DashboardElement, { url: "http://md5.jsontest.com/?text=ABCD", showItem: "md5", callback: this.registerCallBack }),
                    React.createElement(DashboardElement_1.DashboardElement, { url: "http://time.jsontest.com/", showItem: "time", callback: this.registerCallBack }),
                    React.createElement(DashboardElement_1.DashboardElement, { url: "http://ip.jsontest.com/", showItem: "ip", callback: this.registerCallBack }))),
            React.createElement(Counter_1.Counter, { initialValue: 10 })));
    };
    return App;
}(React.Component));
exports.App = App;
/*
List<int> numerot = new List<int>();
let olio = {};
*/


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PageContent = /** @class */ (function (_super) {
    __extends(PageContent, _super);
    function PageContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageContent.prototype.render = function () {
        var styles = { backgroundColor: "pink" };
        // let elements = [];
        // for (var i = 0; i < 3; i++) {
        //     elements.push(<DashboardElement />);
        // }
        return (React.createElement("div", { className: "container", style: styles },
            React.createElement("h2", null, "Sivun sis\u00E4lt\u00F6\u00E4"),
            this.props.children));
    };
    return PageContent;
}(React.Component));
exports.PageContent = PageContent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var initialState = {
    value: "(please wait)"
};
var DashboardElement = /** @class */ (function (_super) {
    __extends(DashboardElement, _super);
    function DashboardElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getBackendData = function () {
            console.log("test");
            fetch(_this.props.url, {
                method: "GET"
            }).then(function (res) { return res.json(); })
                .catch(function (error) { return console.error("Virhe:", error); })
                .then(function (response) {
                console.log("Onnistui! ", response);
                var value = response[_this.props.showItem];
                //let value = response.JokuArvo;
                // päivitetään tilaa muodostamalla kokonaan uusi objekti
                _this.setState({ value: value });
                console.log("Tila päivitetty.");
            });
        };
        return _this;
    }
    DashboardElement.prototype.componentWillMount = function () {
        console.log("componentWillMount");
        this.setState(initialState);
    };
    DashboardElement.prototype.render = function () {
        console.log("URL = " + this.props.url);
        console.log("Item = " + this.props.showItem);
        var styles = {
            backgroundColor: "lightblue",
            margin: 10
        };
        return (React.createElement("div", { className: "col-md-3 dasboardElem", style: styles },
            React.createElement("h3", null, this.props.showItem),
            this.state.value));
    };
    DashboardElement.prototype.componentDidMount = function () {
        console.log("componentDidMount");
        console.log("dashboard didmount");
        this.props.callback(this);
        this.getBackendData();
    };
    return DashboardElement;
}(React.Component));
exports.DashboardElement = DashboardElement;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var initialState = {
    currentValue: 0
};
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.increment = function () {
            _this.setState({
                currentValue: _this.state.currentValue + 1
            });
        };
        _this.decrement = function () {
            console.log(_this.state.currentValue);
            _this.setState({
                currentValue: _this.state.currentValue - 1
            });
        };
        return _this;
    }
    Counter.prototype.componentWillMount = function () {
        console.log("Counter.componentWillMount");
        if (this.props.initialValue !== undefined) {
            console.log("Counter.InitialValue annettu");
            this.setState({
                currentValue: this.props.initialValue
            });
        }
        else {
            console.log("Counter.InitialValue ei annettu");
            this.setState(initialState);
        }
    };
    Counter.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, this.state.currentValue),
            React.createElement("button", { onClick: this.increment }, "Increment"),
            React.createElement("button", { onClick: this.decrement }, "Decrement")));
    };
    return Counter;
}(React.Component));
exports.Counter = Counter;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
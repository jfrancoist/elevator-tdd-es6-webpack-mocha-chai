/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _building = __webpack_require__(1);
	
	var _building2 = _interopRequireDefault(_building);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var body = document.querySelector('body');
	var building = new _building2.default(10);
	
	building.go_to_floor(1);
	building.go_to_floor(5);
	building.go_to_floor(7);
	
	body.textContent = "Elevator has been running since you opened this page. Look in browser console to see what has been going on";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _floor = __webpack_require__(2);
	
	var _floor2 = _interopRequireDefault(_floor);
	
	var _elevator = __webpack_require__(3);
	
	var _elevator2 = _interopRequireDefault(_elevator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Building = function () {
	    function Building(number_of_floors) {
	        _classCallCheck(this, Building);
	
	        this.number_of_floors = number_of_floors;
	        this.contruct_floors();
	        this._elevator = new _elevator2.default(this);
	    }
	
	    _createClass(Building, [{
	        key: 'contruct_floors',
	        value: function contruct_floors() {
	            this._floors_list = [];
	            for (var i = 0; i < this._number_of_floors; i++) {
	                this._floors_list.push(new _floor2.default(i));
	            }
	        }
	    }, {
	        key: 'go_to_floor',
	        value: function go_to_floor(floor_number) {
	            // Try to find if this floor exists
	            var find_floor_result = this._floors_list.map(function (f) {
	                return f.get_floor_number() == floor_number;
	            });
	            if (find_floor_result.indexOf(true) > 0) {
	                this._elevator.go_to_floor(floor_number);
	            } else {
	                throw new Error('This floor number does not exist');
	            }
	        }
	    }, {
	        key: 'get_elevator_current_position',
	        value: function get_elevator_current_position() {
	            return this._elevator.get_current_position();
	        }
	    }, {
	        key: 'get_number_of_floors',
	        value: function get_number_of_floors() {
	            return this._floors_list.length;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'Building says';
	        }
	    }, {
	        key: 'number_of_floors',
	        set: function set(value) {
	            if (typeof value !== 'number' || typeof value === 'number' && !Number.isInteger(value)) {
	                throw new Error('"no of floor" must be an integer.');
	            }
	            this._number_of_floors = value;
	        }
	    }]);
	
	    return Building;
	}();
	
	exports.default = Building;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Floor = function () {
	    function Floor(floor_number) {
	        _classCallCheck(this, Floor);
	
	        this.floor_number = floor_number;
	        console.log('Created floor ' + floor_number);
	    }
	
	    _createClass(Floor, [{
	        key: 'get_floor_number',
	        value: function get_floor_number() {
	            return this._floor_number;
	        }
	    }, {
	        key: 'call_elevator_at_floor',
	        value: function call_elevator_at_floor(floor_number) {
	            // Should be calling elevator from here ???
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'Floor says';
	        }
	    }, {
	        key: 'floor_number',
	        set: function set(value) {
	            if (typeof value !== 'number' || typeof value === 'number' && !Number.isInteger(value)) {
	                throw new Error('"floor" must be an integer.');
	            }
	            this._floor_number = value;
	        }
	    }]);
	
	    return Floor;
	}();
	
	exports.default = Floor;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _door = __webpack_require__(4);
	
	var _door2 = _interopRequireDefault(_door);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Elevator = function () {
	    function Elevator(building) {
	        _classCallCheck(this, Elevator);
	
	        this._building = building;
	        this._current_position = 0;
	        this._door = new _door2.default();
	    }
	
	    _createClass(Elevator, [{
	        key: 'go_to_floor',
	        value: function go_to_floor(floor_number) {
	            // validate input
	            if (typeof floor_number !== 'number' || typeof floor_number === 'number' && !Number.isInteger(floor_number)) {
	                throw new Error('"floor number" must be an integer.');
	            }
	            // validate requested floor
	            if (this._building.get_number_of_floors() < floor_number) {
	                throw new Error('"floor number" must be valid cannot go out of building.');
	            }
	
	            var j;
	            if (this._current_position < floor_number) {
	                this._direction = "GOING UP";
	                for (j = this._current_position; j <= floor_number; j++) {
	                    console.log('Moving through floor ' + j);
	                }
	                this._current_position = j - 1;
	                this._door.open();
	                this._door.close();
	            } else if (this._current_position > floor_number) {
	                this._direction = "GOING DOWN";
	                for (j = this._current_position; j >= floor_number; j--) {
	                    console.log('Moving through floor ' + j);
	                }
	                this._current_position = j + 1;
	                this._door.open();
	                this._door.close();
	            }
	        }
	    }, {
	        key: 'get_current_position',
	        value: function get_current_position() {
	            return this._current_position;
	        }
	    }, {
	        key: 'get_direction',
	        value: function get_direction() {
	            return this._direction;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'Elevator says';
	        }
	    }]);
	
	    return Elevator;
	}();
	
	exports.default = Elevator;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Door = function () {
	    function Door() {
	        _classCallCheck(this, Door);
	
	        this._state = false;
	    }
	
	    _createClass(Door, [{
	        key: "open",
	        value: function open() {
	            if (this._state == false) {
	                this._state = true;
	                console.log("door opened");
	            }
	            return this._state;
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            if (this._state == true) {
	                this._state = false;
	                console.log("door closed");
	            }
	            return this._state;
	        }
	    }, {
	        key: "state",
	        value: function state() {
	            return this._state;
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "Door says";
	        }
	    }]);
	
	    return Door;
	}();
	
	exports.default = Door;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
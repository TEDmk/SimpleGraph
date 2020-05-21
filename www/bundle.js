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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Chart = void 0;\nvar ChartCanvas_1 = __webpack_require__(/*! ./canvas/ChartCanvas */ \"./src/canvas/ChartCanvas.ts\");\nvar YAxisCanvas_1 = __webpack_require__(/*! ./canvas/YAxisCanvas */ \"./src/canvas/YAxisCanvas.ts\");\nvar Chart = /** @class */ (function () {\n    function Chart(chartContainer, xAxisCanvas, width, height, axisThickness) {\n        this.chartContainer = chartContainer;\n        this.xAxisCanvas = xAxisCanvas;\n        this.width = width;\n        this.height = height;\n        this.axisThickness = axisThickness;\n        this.setDataScale({\n            startValue: 0,\n            pixelOffset: 0,\n            deltaPixel: 20,\n            deltaValue: 100,\n        });\n        this.chartCanvas = new ChartCanvas_1.ChartCanvas(this, width, height);\n        this.yAxisCanvas = new YAxisCanvas_1.YAxisCanvas(this, axisThickness, height);\n        this.draw();\n    }\n    Chart.prototype.getYAxisCanvas = function () {\n        return this.yAxisCanvas;\n    };\n    Chart.prototype.getChartCanvas = function () {\n        return this.chartCanvas;\n    };\n    Chart.prototype.getDataScale = function () {\n        return this.dataScale;\n    };\n    Chart.prototype.setDataScale = function (dataScale) {\n        this.dataScale = dataScale;\n    };\n    Chart.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    Chart.prototype.setTimeScale = function (timeScale) {\n        this.chartContainer.setTimeScale(timeScale);\n        this.chartContainer.draw();\n    };\n    Chart.prototype.draw = function () {\n        this.chartCanvas.draw();\n        this.yAxisCanvas.draw();\n    };\n    return Chart;\n}());\nexports.Chart = Chart;\n\n\n//# sourceURL=webpack:///./src/Chart.ts?");

/***/ }),

/***/ "./src/ChartContainer.ts":
/*!*******************************!*\
  !*** ./src/ChartContainer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.ChartContainer = void 0;\nvar Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/Chart.ts\");\nvar xAxisCanvas_1 = __webpack_require__(/*! ./canvas/xAxisCanvas */ \"./src/canvas/xAxisCanvas.ts\");\nvar ChartContainer = /** @class */ (function () {\n    function ChartContainer(divID, width, axisThickness) {\n        this.divID = divID;\n        this.width = width;\n        this.axisThickness = axisThickness;\n        this.setTimeScale({\n            startDate: new Date(1589923542000),\n            pixelOffset: 20,\n            deltaPixel: 100,\n            deltaSecond: 60 * 30,\n        });\n        this.charts = new Array();\n        this.containerElement = document.getElementById(divID);\n        this.xAxisCanvas = new xAxisCanvas_1.XAxisCanvas(this, width, axisThickness);\n        this.mainTable = document.createElement('table');\n        this.mainTable.id = divID + \"-table\";\n        this.containerElement.appendChild(this.mainTable);\n        this.addXAxis();\n    }\n    ChartContainer.prototype.newChart = function (height) {\n        var chart = new Chart_1.Chart(this, this.xAxisCanvas, this.width, height, this.axisThickness);\n        this.charts.push(chart);\n        this.update();\n    };\n    ChartContainer.prototype.update = function () {\n        this.mainTable.innerHTML = \"\";\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            var chartRow = this.mainTable.insertRow();\n            chartRow.appendChild(this.getCanvasInCell(chart.getChartCanvas()));\n            chartRow.appendChild(this.getCanvasInCell(chart.getYAxisCanvas()));\n        }\n        this.addXAxis();\n    };\n    ChartContainer.prototype.draw = function () {\n        for (var _i = 0, _a = this.charts; _i < _a.length; _i++) {\n            var chart = _a[_i];\n            chart.draw();\n        }\n        this.xAxisCanvas.draw();\n    };\n    ChartContainer.prototype.addXAxis = function () {\n        var xAxisRow = this.mainTable.insertRow();\n        var uselessCanvas = new xAxisCanvas_1.XAxisCanvas(this, this.axisThickness, this.axisThickness);\n        xAxisRow.appendChild(this.getCanvasInCell(this.xAxisCanvas));\n        xAxisRow.appendChild(this.getCanvasInCell(uselessCanvas));\n        this.xAxisCanvas.draw();\n    };\n    ChartContainer.prototype.setTimeScale = function (timeScale) {\n        this.timeScale = timeScale;\n    };\n    ChartContainer.prototype.getTimeScale = function () {\n        return this.timeScale;\n    };\n    ChartContainer.prototype.getCanvasInCell = function (canvas) {\n        var cell = document.createElement(\"td\");\n        cell.appendChild(canvas.getCanvas());\n        return cell;\n    };\n    return ChartContainer;\n}());\nexports.ChartContainer = ChartContainer;\n\n\n//# sourceURL=webpack:///./src/ChartContainer.ts?");

/***/ }),

/***/ "./src/canvas/Canvas.ts":
/*!******************************!*\
  !*** ./src/canvas/Canvas.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Canvas = exports.Position = void 0;\nvar MouseState;\n(function (MouseState) {\n    MouseState[MouseState[\"Drag\"] = 2] = \"Drag\";\n    MouseState[MouseState[\"Up\"] = 1] = \"Up\";\n    MouseState[MouseState[\"Down\"] = 0] = \"Down\";\n})(MouseState || (MouseState = {}));\nvar Position = /** @class */ (function () {\n    function Position() {\n    }\n    return Position;\n}());\nexports.Position = Position;\nvar Canvas = /** @class */ (function () {\n    function Canvas(width, height) {\n        var _this = this;\n        var ratio = 2;\n        this.canvas = document.createElement(\"canvas\");\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.width = ratio * width;\n        this.canvas.height = ratio * height;\n        this.canvas.style.width = width.toString() + \"px\";\n        this.canvas.style.height = height.toString() + \"px\";\n        this.context.scale(ratio, ratio);\n        this.context.imageSmoothingEnabled = false;\n        this.context.textBaseline = \"middle\";\n        this.mouseState = MouseState.Up;\n        this.boundingRect = this.canvas.getBoundingClientRect();\n        this.screenPosition = { x: 0, y: 0 };\n        this.canvas.addEventListener(\"mousedown\", function (e) { _this.onMouseChangeState(MouseState.Down, e); });\n        this.canvas.addEventListener(\"mouseup\", function (e) { _this.onMouseChangeState(MouseState.Up, e); });\n        this.canvas.addEventListener(\"mousemove\", function (e) { _this.onMouseMove(e); });\n    }\n    Canvas.prototype.getCanvas = function () {\n        return this.canvas;\n    };\n    Canvas.prototype.drawLine = function (start, end) {\n        this.context.beginPath();\n        this.context.translate(0.5, 0.5);\n        this.context.moveTo(start[0], start[1]);\n        this.context.lineTo(end[0], end[1]);\n        this.context.stroke();\n        this.context.translate(-0.5, -0.5);\n    };\n    Canvas.prototype.drawText = function (text, pos, font) {\n        if (font === void 0) { font = \"10px Arial\"; }\n        this.context.font = font;\n        this.context.fillText(text, pos[0], pos[1]);\n    };\n    Canvas.prototype.onMouseChangeState = function (state, e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        // Getting a Click = UP -> DOWN -> UP\n        if (state == MouseState.Up && this.mouseState == MouseState.Down)\n            this.onClick({ x: x, y: y });\n        // Record position of Mouse Down in case of drag\n        if (state == MouseState.Up) {\n            this.mouseDownPos = null;\n        }\n        if (state == MouseState.Down) {\n            this.mouseDownPos = { x: x, y: y };\n        }\n        if (!(this.mouseState == MouseState.Drag && state == MouseState.Down)) {\n            this.mouseState = state;\n        }\n    };\n    Canvas.prototype.onMouseMove = function (e) {\n        var x = e.clientX - this.boundingRect.left;\n        var y = e.clientY - this.boundingRect.top;\n        if (this.mouseState == MouseState.Down || this.mouseState == MouseState.Drag) {\n            this.mouseState = MouseState.Drag;\n            this.onDrag(this.mouseDownPos, { x: x, y: y });\n        }\n    };\n    Canvas.prototype.onDrag = function (previousPos, currentPos) {\n        this.screenPosition = { x: this.screenPosition.x + currentPos.x - previousPos.x, y: this.screenPosition.y + currentPos.y - previousPos.y };\n        console.log(this.screenPosition);\n        this.mouseDownPos = currentPos;\n    };\n    Canvas.prototype.onClick = function (pos) {\n        console.log(\"CLICK\");\n    };\n    return Canvas;\n}());\nexports.Canvas = Canvas;\n\n\n//# sourceURL=webpack:///./src/canvas/Canvas.ts?");

/***/ }),

/***/ "./src/canvas/ChartCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/ChartCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.ChartCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar ChartCanvas = /** @class */ (function (_super) {\n    __extends(ChartCanvas, _super);\n    function ChartCanvas(chart, width, height) {\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        return _this;\n    }\n    ChartCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.context.translate(this.screenPosition.x, this.screenPosition.y);\n        this.drawText(\"CELIA\", [100, 100]);\n        this.context.translate(-this.screenPosition.x, -this.screenPosition.y);\n    };\n    ChartCanvas.prototype.onDrag = function (previousPos, currentPos) {\n        var x = this.screenPosition.x + currentPos.x - previousPos.x;\n        var y = this.screenPosition.y + currentPos.y - previousPos.y;\n        this.screenPosition = { x: x, y: y };\n        this.mouseDownPos = currentPos;\n        var currentDataScale = this.getDataScale();\n        currentDataScale.pixelOffset = y;\n        this.setDataScale(currentDataScale);\n        var currenTimeScale = this.getTimeScale();\n        currenTimeScale.pixelOffset = x;\n        this.setTimeScale(currenTimeScale);\n        this.chart.draw();\n    };\n    ChartCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    ChartCanvas.prototype.setDataScale = function (dataScale) {\n        return this.chart.setDataScale(dataScale);\n    };\n    ChartCanvas.prototype.getTimeScale = function () {\n        return this.chart.getTimeScale();\n    };\n    ChartCanvas.prototype.setTimeScale = function (timeScale) {\n        this.chart.setTimeScale(timeScale);\n    };\n    return ChartCanvas;\n}(Canvas_1.Canvas));\nexports.ChartCanvas = ChartCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/ChartCanvas.ts?");

/***/ }),

/***/ "./src/canvas/YAxisCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/YAxisCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.YAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar YAxisCanvas = /** @class */ (function (_super) {\n    __extends(YAxisCanvas, _super);\n    function YAxisCanvas(chart, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chart = chart;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    YAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var bar_offset = 0;\n        var offset = 4;\n        var bar_height = this.height;\n        this.drawLine([bar_offset, 0], [bar_offset, bar_height]);\n        for (var i = 0; i <= this.divisionNumber; i++) {\n            var pos = this.getDataScale().pixelOffset + i * this.getDataScale().deltaPixel;\n            this.drawLine([bar_offset, pos], [bar_offset + offset, pos]);\n            var value = this.getDataScale().startValue + i * this.getDataScale().deltaValue;\n            this.drawText(value.toString(), [bar_offset + 2 * offset, pos]);\n        }\n    };\n    YAxisCanvas.prototype.getDataScale = function () {\n        return this.chart.getDataScale();\n    };\n    return YAxisCanvas;\n}(Canvas_1.Canvas));\nexports.YAxisCanvas = YAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/YAxisCanvas.ts?");

/***/ }),

/***/ "./src/canvas/xAxisCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/xAxisCanvas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nexports.XAxisCanvas = void 0;\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\nvar XAxisCanvas = /** @class */ (function (_super) {\n    __extends(XAxisCanvas, _super);\n    function XAxisCanvas(chartContainer, width, height, divisionNumber) {\n        if (divisionNumber === void 0) { divisionNumber = 20; }\n        var _this = _super.call(this, width, height) || this;\n        _this.chartContainer = chartContainer;\n        _this.width = width;\n        _this.height = height;\n        _this.divisionNumber = divisionNumber;\n        return _this;\n    }\n    XAxisCanvas.prototype.setScale = function (scale) {\n        this.timeScale = scale;\n    };\n    XAxisCanvas.prototype.draw = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        var show = \"hours\";\n        var bar_offset = 0;\n        var offset = 5;\n        var bar_width = this.width;\n        this.drawLine([0, bar_offset], [bar_width, bar_offset]);\n        for (var i = 0; i <= this.divisionNumber; i++) {\n            var pos = this.getTimeScale().pixelOffset + i * this.getTimeScale().deltaPixel;\n            this.drawLine([pos, bar_offset], [pos, bar_offset + offset]);\n            var date = new Date(this.getTimeScale().startDate.getTime() + 1000 * i * this.getTimeScale().deltaSecond);\n            if (show == \"hours\")\n                this.drawText(this._dateToHours(date), [pos, 3 * offset]);\n            if (show == \"day\")\n                this.drawText(this._dateToDate(date), [pos, 3 * offset]);\n        }\n    };\n    XAxisCanvas.prototype.getTimeScale = function () {\n        return this.chartContainer.getTimeScale();\n    };\n    XAxisCanvas.prototype._dateToHours = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getHours()) + \":\" + addZero(date.getMinutes());\n    };\n    XAxisCanvas.prototype._dateToDate = function (date) {\n        function addZero(i) {\n            return (i < 10) ? \"0\" + i : i;\n        }\n        return addZero(date.getDate()) + \"/\" + addZero(date.getMonth() + 1) + \"/\" + addZero(date.getFullYear());\n    };\n    return XAxisCanvas;\n}(Canvas_1.Canvas));\nexports.XAxisCanvas = XAxisCanvas;\n\n\n//# sourceURL=webpack:///./src/canvas/xAxisCanvas.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar ChartContainer_1 = __webpack_require__(/*! ./ChartContainer */ \"./src/ChartContainer.ts\");\nvar chartContainer = new ChartContainer_1.ChartContainer(\"test\", 800, 50);\nchartContainer.newChart(400);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });